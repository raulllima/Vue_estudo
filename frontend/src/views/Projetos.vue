<template>
  <div>
    <div class="container">
      <div class="projeto-wrapper">
        <div class="container-new_project" style="margin-bottom: 2%;">
          <img
            @click="openModalNProject"
            src="../assets/images/add.png"
            alt=""
            style="width: 18px; cursor: pointer"
          />
          <button @click="openModalNProject">Criar projeto</button>

          <img
            @click="openModalIProject"
            src="../assets/images/add.png"
            alt=""
            style="width: 18px; cursor: pointer; margin-left: 10px"
          />
          <button @click="openModalIProject">Importar Projeto</button>
        </div>
        <div v-if="Array.isArray(projects) && projects.length === 0">
          Nenhum projeto encontrado
        </div>
        <div
          v-for="(project, index) in projects"
          :key="index + project.name"
          class="projeto-container"
          :class="{ selected: project.selected }"
        >
          <div
            class="input-container"
            @keydown.enter="editProject(project)"
            @keydown.esc="editProject(project)"
            @dblclick="editProject(project)"
          >
            <input
              ref="inputRefs"
              type="text"
              :value="project.name"
              :readonly="project.isReadonly"
              @input="(e) => updateNameProject(project, e.target.value)"
              @blur="handleBlur(project.name)"
            />
            <div class="underline"></div>
          </div>
          <div
            class="actions"
            style="display: flex; justify-content: center; align-items: center"
          >
            <button @click="exportProject(project)"><span>Baixar</span></button>

            <button
              @click="loadProject(project)"
              :disabled="project.selected"
              :class="{ disabled: project.selected }"
              style="
                display: flex;
                height: 40px;
                justify-content: center;
                align-items: center;
              "
            >
              <span
                v-if="!project.isLoading"
                :class="{ 'fade-out': project.fadingOut }"
              >
                {{ project.selected ? "Carregado" : "Carregar" }}
              </span>
              <img
                v-else
                src="../assets/images/loading.svg"
                alt=""
                style="height: 150%"
              />
            </button>

            <span @click="editProject(project)" style="margin-right: 10px"
              ><img
                :src="
                  project.isReadonly
                    ? require('../assets/images/edit.png')
                    : require('../assets/images/save.png')
                "
                alt="botão deletar projeto"
            /></span>
            <span @click="deleteProject(project)"
              ><img
                src="../assets/images/delete.png"
                alt="botão deletar projeto"
            /></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal New Project-->
    <div v-if="showModalNProject" class="modal">
      <div class="modal-wrapper">
        <div class="modal-content">
          <span class="close" @click="closeModalNProject">&times;</span>
          <h2>Novo Projeto</h2>
          <div class="input-group">
            <input
              type="text"
              v-model="project_name"
              placeholder="Nome do seu projeto"
              required
            />
          </div>
          <div class="input-group">
            <select v-model="based_name" required>
              <option value="" selected>Não selecionar nenhum</option>
              <option
                v-for="(project, index) in projects"
                :key="index"
                :value="project.name"
              >
                {{ project.name }}
              </option>
            </select>
          </div>
          <div ref="messageContainer" style="margin: 20px"></div>

          <div class="actions actionCreate" @click="createProject">
            <span v-if="!createLoading"> Criar </span>
            <img v-else src="../assets/images/loading.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal New Project-->
    <div v-if="showModalIProject" class="modal">
      <div class="modal-wrapper">
        <div class="modal-content">
          <span class="close" @click="closeModalIProject">&times;</span>
          <h2>Importar Projeto</h2>

          <div
            class="dropzone-container"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
            :style="isDragging && 'border-color: green;'"
          >
            <input
              type="file"
              multiple
              name="file"
              id="fileInput"
              class="hidden-input"
              @change="onChange"
              ref="file"
              accept=".xlsx"
            />

            <label for="fileInput" class="file-label">
              <div v-if="isDragging">Solte seus arquivos aqui.</div>
              <div v-else>
                Solte seus arquivos aqui ou <u>clique aqui</u> para enviar.
              </div>
            </label>
            <!-- Note: Only add the code block below -->
            <div class="preview-container" v-if="files.length">
              <div v-for="file in files" :key="file.name" class="preview-card">
                <div>
                  <p>
                    {{ file.name }}
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    @click="remove(files.indexOf(file))"
                    title="Remover arquivo"
                  >
                    <b>×</b>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div ref="messageContainer" style="margin: 20px"></div>

          <div class="actions">
            <button @click="importProject(files)">Importar</button>
          </div>
        </div>
      </div>
    </div>
    <Notifications />
  </div>
</template>

<script>
import api from "@/api/api";
import {
  ref,
  onMounted,
  watch,
  getCurrentInstance,
  computed,
  nextTick,
} from "vue";
import { useStore } from "vuex";

import { useNotification } from "@kyvg/vue3-notification";
import { Notifications } from "@kyvg/vue3-notification";
const { notify } = useNotification();

export default {
  name: "meusProjetos",
  data() {
    return {
      showModalNProject: false,
      showModalIProject: false,
      isDragging: false,
      files: [],
    };
  },
  methods: {
    openModalNProject() {
      this.showModalNProject = true; // Abre o modal
    },
    closeModalNProject() {
      this.showModalNProject = false; // Fecha o modal
    },
    openModalIProject() {
      this.showModalIProject = true; // Abre o modal
    },
    closeModalIProject() {
      this.showModalIProject = false; // Fecha o modal
      this.files = [];
    },
    onChange() {
      const self = this;
      let incomingFiles = Array.from(this.$refs.file.files);
      const fileExist = self.files.some((r) =>
        incomingFiles.some(
          (file) => file.name === r.name && file.size === r.size
        )
      );
      const notExcel = incomingFiles.some(
        (file) => !file.name.includes(".xlsx")
      );
      if (fileExist) {
        self.showMessage = true;
        alert("Existem arquivos duplicados.");
      } else if (notExcel) {
        self.showMessage = true;
        alert("Só aceito documentos excel.");
      } else {
        self.files.push(...incomingFiles);
      }
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    remove(i) {
      this.files.splice(i, 1);
    },
  },
  setup() {
    const store = useStore();
    const instance = getCurrentInstance();
    const createLoading = ref(false);

    const projects = computed(() => store.state.projects);
    const project_name = ref("");
    const based_name = ref("");
    const messageContainer = ref(null);
    const activeProject = computed(() => store.state.activeProject);
    const oldProjectName = ref(null);
    const inputRefs = ref([]);

    watch([project_name, based_name], ([new_project_name, new_based_name]) => {
      project_name.value = new_project_name;
      based_name.value = new_based_name;
    });

    // Função para buscar projetos da API
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        if (!response.data.length == 0) {
          response.data.forEach(async (proj) => {
            if (!projects.value.some((atualProj) => atualProj.name == proj)) {
              // Adiciona diretamente ao localStorage via mutação ou função Vuex
              store.commit("addProject", {
                name: proj,
                fadingOut: false,
                selected: false,
                isReadonly: true,
                isLoading: false,
              });
            }
          });

          // Remove projetos do `localStorage` que não estão na resposta da API
          const updatedProjects = projects.value.filter((atualProj) =>
            response.data.includes(atualProj.name)
          );

          // Atualize o localStorage diretamente ou via mutação
          await store.commit("setProjects", updatedProjects);
          // await store.dispatch("updateProjects", projects)
          if (
            activeProject.value == null ||
            !projects.value.some(
              (projeto) => projeto.name == activeProject.value.name
            )
          ) {
            await store.dispatch("updateActiveProject", projects.value[0]);
          }

          if (activeProject.value) {
            loadProject(activeProject.value);
            await api.put(`/application/active/${activeProject.value}`);
          } else {
            await api.put(`/application/active/${projects.value[0]}`);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

    // Função para carregar o projeto
    const loadProject = async (project) => {
      // Adiciona o loading no projeto.
      projects.value.map((p) => {
        if (p.name === project.name) {
          p.isLoading = true;
        }
      });

      try {
        const response = await api
          .get(`/application/load/${project.name}`)
          .then(() => {
            projects.value.forEach((p) => {
              if (p.name !== project.name) {
                p.selected = false;
                p.fadingOut = false;
              }
              if (p.name == project.name) {
                p.selected = true;
                p.fadingOut = true;
                p.isLoading = false;
              }
            });

            setTimeout(() => {
              projects.value.forEach((p) => {
                if (p.name == project.name) {
                  p.fadingOut = false;
                }
              });
            }, 300); // O mesmo tempo que a transição CSS
          });

        await store.dispatch("updateActiveProject", project);
      } catch (error) {
        console.error("Erro ao carregar projeto:", error);
      }
    };

    const createProject = async () => {
      createLoading.value = true;
      try {
        const response = await api
          .post(
            `/application/create/${project_name.value}`,
            {},
            {
              headers: {
                based_on: based_name.value,
              },
            }
          )
          .then((response) => {
            fetchProjects();
            notify({
              title: "Notificação",
              text: `${response.data.message}!`,
              type: "success", // Tipos possíveis: 'success', 'error', 'warning', etc.
              duration: 5000,
              pauseOnHover: true,
              closeOnClick: true,
            });
            if (instance && instance.proxy) {
              createLoading.value = false;
              instance.proxy.closeModalNProject(); // Chamando o método da instância
            }
          })
          .catch((error) => {
            createLoading.value = false;
            notify({
              title: "Notificação",
              text: `${
                error.response.data.error
                  ? error.response.data.error
                  : "Preencha o nome do projeto"
              }!`,
              type: "error", // Tipos possíveis: 'success', 'error', 'warning', etc.
              duration: 5000,
              pauseOnHover: true,
              closeOnClick: true,
            });
          });
      } catch (error) {
        console.error("Erro ao criar projeto:", error);
      }
    };

    const exportProject = async (project) => {
      const response = await api
        .get(`/application/export/${project.name}`, {
          responseType: "blob", // Ainda é importante definir isso para arquivos binários
        })
        .then((response) => {
          // Criar um URL para o blob
          const url = window.URL.createObjectURL(new Blob([response.data]));
          // Criar um link temporário para o download
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${project.name}.xlsx`); // Nome do arquivo para download

          // Adicionar o link ao DOM e simular o clique para download
          document.body.appendChild(link);
          link.click();

          // Limpar o URL e remover o link
          link.remove();
          window.URL.revokeObjectURL(url);
        });
    };

    const importProject = async (files) => {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("selectedFiles", file);
      });

      api
        .post(`/application/import/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          fetchProjects();
          if (instance && instance.proxy) {
            instance.proxy.closeModalIProject(); // Chamando o método da instância
          }
        })
        .catch((error) => {
          // Trate o erro aqui
          if (error.response) {
            alert(error.response.data.error);
          }
        });
    };

    const editProject = async (project) => {
      projects.value.forEach((p) => {
        if (p.name === project.name) project.isReadonly = !project.isReadonly;
      });

      if (project.isReadonly) {
        const response = await api
          .put(
            `/application/edit/${
              oldProjectName.value ? oldProjectName.value : project.name
            }`,
            {},
            {
              headers: {
                new_project_name: project.name,
              },
            }
          )
          .then((response) => {
            fetchProjects();
          });
      } else {
        oldProjectName.value = project.name;
      }
    };

    const updateNameProject = async (project, value) => {
      project.name = value;

      const index = projects.value.findIndex((p) => p.name === project.name);

      if (index !== -1) {
        projects.value.splice(index, 1, { ...project });
      }
    };

    const handleBlur = async (project_name) => {
      nextTick(() => {
        inputRefs.value.forEach((input, index) => {
          if (input.value == project_name) input.focus();
        });
      });
    };

    const deleteProject = async (project) => {
      if (project.name == activeProject.value.name) {
        notify({
          title: "Notificação",
          text: `Você não pode apagar um projeto carregado!`,
          type: "warning", // Tipos possíveis: 'success', 'error', 'warning', etc.
          duration: 5000,
          pauseOnHover: true,
          closeOnClick: true,
        });
      } else {
        const response = await api
          .delete(`/application/delete/${project.name}`)
          .then(() => {
            fetchProjects();
          });
      }
    };

    // Hook para buscar projetos ao montar o componente
    onMounted(async () => {
      await fetchProjects();
    });

    return {
      Notifications,
      createLoading,
      projects,
      loadProject,
      createProject,
      exportProject,
      importProject,
      editProject,
      updateNameProject,
      handleBlur,
      deleteProject,

      project_name,
      based_name,
      messageContainer,
      inputRefs,
    };
  },
  mounted() {},
};
</script>

<style scoped>
.actionCreate {
  display: flex;
  width: 100%;
  height: 4.76vh;
  max-height: 4.76vh;
  padding: 0.75rem;
  background-color: rgb(68, 177, 77);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.actionCreate img {
  height: 160%;
}

.actionCreate:hover {
  background-color: rgb(51, 134, 58);
}

.container {
  display: flex;
  justify-content: center;
}

.projeto-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.projeto-container {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 100px;
  transition: 0.3s;
  margin-bottom: 5%;
}

.projeto-container.selected {
  box-shadow: 0px 0px 5px 0px rgba(76, 175, 80, 0.57);
  transform: scale(1.02);
  transition: 0.5s;
}

.actions button {
  background-color: #4caf50;
  /* Cor de fundo verde */
  color: #fff;
  /* Cor do texto */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 15px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s;
  outline: none;
  width: 116px;
}

.actions button span {
  display: inline-block;
  transition: opacity 0.3s;
  /* Transição suave de 0.3 segundos */
}

.actions button span.fade-out {
  opacity: 0;
  /* Torna o texto invisível durante a transição */
}

.actions span img {
  position: relative;
  top: 3px;
  display: inline-block;
  transition: opacity 0.3s;
  width: 20px;
  height: 20px;
  /* Transição suave de 0.3 segundos */
}

.actions span img:hover {
  cursor: pointer;
  opacity: 0.2;
  transition: opacity 0.3s;
  /* Transição suave de 0.3 segundos */
}

.actions button:hover {
  background-color: #45a049;
  /* Cor mais escura ao passar o mouse */
}

.actions button:active {
  transform: scale(0.95);
  /* Leve redução no clique */
}

.container-new_project {
  display: flex;
  font-size: 13.5px;
  align-items: center;
}

.container-new_project button {
  margin-left: 6px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 800px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.modal-content h2 {
  margin-bottom: 1.5rem;
  font-size: xx-large;
  color: rgb(68, 177, 77);
}

.input-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 0.75rem;
  padding-left: 2.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
}

.input-group input:focus {
  border-color: rgb(68, 177, 77);
}

.input-group select {
  width: 100%;
  padding: 0.75rem;
  padding-left: 2.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  appearance: none;
  /* Remove a aparência padrão do select */
  background: url("../assets/images/arrow-down.svg") no-repeat right 0.75rem
    center;
  background-size: 1rem;
  /* Tamanho da seta */
}

.input-group select:focus {
  border-color: rgb(68, 177, 77);
  background-color: #f9f9f9;
  /* Opcional: muda a cor do fundo ao focar */
}

.dropzone-container {
  padding: 4rem;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border: 2px dashed;
  border-color: #9e9e9e;
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.file-label {
  font-size: 20px;
  display: block;
  cursor: pointer;
}

.preview-container {
  display: flex;
  margin-top: 2rem;
}

.preview-card {
  display: flex;
  border: 1px solid #a2a2a2;
  padding: 5px;
  margin-left: 5px;
}

.preview-img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #a2a2a2;
  background-color: #a2a2a2;
}

.disabled {
  background-color: grey !important;
  opacity: 0.5 !important;
  cursor: not-allowed !important;
}

.disabled:active {
  transform: none !important;
  /* Leve redução no clique */
}

.input-container {
  position: relative;
}

.input-container input[type="text"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  color: #4b4b4b;
  text-align: initial;
  font-size: 16px;
  appearance: none;
  border: none;
  box-shadow: 0 0 0 0;
  background: none;
  background-color: transparent;
  width: 100%;
  padding: 5px 0;
  outline: none;
  font-family: Avenir, AvenirLocal, Helvetica, Arial, sans-serif;
}

.input-container input[type="text"]::selection {
  background: transparent;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;

  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type="text"]:focus ~ .label,
.input-container input[type="text"]:valid ~ .label {
  font-size: 16px;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #a1caff;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[readonly] {
  pointer-events: none;
}

.input-container input[readonly]:focus ~ .underline {
  transform: scaleX(0);
}

.input-container input[type="text"]:focus:not([readonly]) ~ .underline {
  transform: scaleX(1);
}
</style>

<template>
  <div class="mainPage">
    <EasyDataTable
      buttons-pagination
      table-class-name="CustomTable"
      header-text-direction="center"
      body-text-direction="center"
      :headers="headers"
      :items="items"
      :loading="loading"
      :search-field="searchField"
      :search-value="searchValue"
    >
      <template #loading>
        <img src="../../assets/images/loading.gif" style="width: 30%" />
      </template>

      <template #item-type_item="item">
        <label>
          <select
            @change="(e) => typeEdit(item, e.target.value)"
            :disabled="item.isReadonly"
          >
            <option
              value="Renovável"
              :selected="item.type_item === 'Renovável'"
            >
              Renovável
            </option>
            <option
              value="Não Renovável"
              :selected="item.type_item === 'Não Renovável'"
            >
              Não Renovável
            </option>
            <option
              value="Reciclável"
              :selected="item.type_item === 'Reciclável'"
            >
              Reciclável
            </option>
          </select>
        </label>
      </template>

      <template #item-descricao="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.descricao"
            @copy.prevent
            @input="(e) => updateItem(item, 'descricao', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-material="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.material"
            @copy.prevent
            @input="(e) => updateItem(item, 'material', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-compos_quimica="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.compos_quimica"
            @copy.prevent
            @input="(e) => updateItem(item, 'compos_quimica', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-quantidade="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.quantidade"
            @copy.prevent
            @input="(e) => updateItem(item, 'quantidade', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-unidade="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.unidade"
            @copy.prevent
            @input="(e) => updateItem(item, 'unidade', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #expand="item">
        <EasyDataTable
          buttons-pagination
          table-class-name="SubTable"
          header-text-direction="center"
          body-text-direction="center"
          :headers="
            Object.keys(item)
              .filter(
                (key) =>
                  ![
                    'key',
                    'id',
                    'type_item',
                    'descricao',
                    'material',
                    'compos_quimica',
                    'quantidade',
                    'unidade',
                    'isReadonly',
                  ].includes(key)
              )
              .map((key) => {
                const keyString = String(key)
                  .replace(/_/g, ' ')
                  .replace(/\b\w/g, (l) => l.toUpperCase())
                  .replace(/Nao(?=[A-Z])/g, 'Nao ');

                return {
                  text: keyString.toUpperCase(),
                  value: key,
                };
              })
          "
          :items="[item]"
          :loading="loading"
          :search-field="searchField"
          :search-value="searchValue"
          hide-footer
        >
          <template #loading>
            <img src="../../assets/images/loading.gif" style="width: 30%" />
          </template>

          <template #item-cod_item="item">
            <div
              class="input-container"
              @keydown.enter="btnEditItem(item)"
              @keydown.esc="disableEdit(item)"
              @dblclick="enableEdit(item)"
            >
              <input
                class="inputSetup"
                type="text"
                :readonly="item.isReadonly"
                :value="item.cod_item"
                @copy.prevent
                @input="(e) => updateItem(item, 'cod_item', e.target.value)"
              />
              <div class="underline"></div>
            </div>
          </template>

          <template #item-peso_unit_kg="item">
            <div
              class="input-container"
              @keydown.enter="btnEditItem(item)"
              @keydown.esc="disableEdit(item)"
              @dblclick="enableEdit(item)"
            >
              <input
                class="inputSetup"
                type="text"
                :readonly="item.isReadonly"
                :value="item.peso_unit_kg"
                @copy.prevent
                @input="(e) => updateItem(item, 'peso_unit_kg', e.target.value)"
              />
              <div class="underline"></div>
            </div>
          </template>

          <template #item-custo_unit="item">
            <div
              class="input-container"
              @keydown.enter="btnEditItem(item)"
              @keydown.esc="disableEdit(item)"
              @dblclick="enableEdit(item)"
            >
              <input
                class="inputSetup"
                type="text"
                :readonly="item.isReadonly"
                :value="item.custo_unit"
                @copy.prevent
                @input="(e) => updateItem(item, 'custo_unit', e.target.value)"
              />
              <div class="underline"></div>
            </div>
          </template>

          <template #item-fabricante="item">
            <div
              class="input-container"
              @keydown.enter="btnEditItem(item)"
              @keydown.esc="disableEdit(item)"
              @dblclick="enableEdit(item)"
            >
              <input
                class="inputSetup"
                type="text"
                :readonly="item.isReadonly"
                :value="item.fabricante"
                @copy.prevent
                @input="(e) => updateItem(item, 'fabricante', e.target.value)"
              />
              <div class="underline"></div>
            </div>
          </template>

          <template #item-aplic_comercial="item">
            <div
              class="input-container"
              @keydown.enter="btnEditItem(item)"
              @keydown.esc="disableEdit(item)"
              @dblclick="enableEdit(item)"
            >
              <input
                class="inputSetup"
                type="text"
                :readonly="item.isReadonly"
                :value="item.aplic_comercial"
                @copy.prevent
                @input="
                  (e) => updateItem(item, 'aplic_comercial', e.target.value)
                "
              />
              <div class="underline"></div>
            </div>
          </template>

          <template #item-demanda_mensal="item">
            <div
              class="input-container"
              @keydown.enter="btnEditItem(item)"
              @keydown.esc="disableEdit(item)"
              @dblclick="enableEdit(item)"
            >
              <input
                class="inputSetup"
                type="text"
                :readonly="item.isReadonly"
                :value="item.demanda_mensal"
                @copy.prevent
                @input="
                  (e) => updateItem(item, 'demanda_mensal', e.target.value)
                "
              />
              <div class="underline"></div>
            </div>
          </template>

          <template #item-qtd_compartilhada="item">
            <div
              class="input-container"
              @keydown.enter="btnEditItem(item)"
              @keydown.esc="disableEdit(item)"
              @dblclick="enableEdit(item)"
            >
              <input
                class="inputSetup"
                type="text"
                :readonly="item.isReadonly"
                :value="item.qtd_compartilhada"
                @copy.prevent
                @input="
                  (e) => updateItem(item, 'qtd_compartilhada', e.target.value)
                "
              />
              <div class="underline"></div>
            </div>
          </template>

          <template #item-qtd_naoCompartilhada="item">
            <div
              class="input-container"
              @keydown.enter="btnEditItem(item)"
              @keydown.esc="disableEdit(item)"
              @dblclick="enableEdit(item)"
            >
              <input
                class="inputSetup"
                type="text"
                :readonly="item.isReadonly"
                :value="item.qtd_naoCompartilhada"
                @copy.prevent
                @input="
                  (e) =>
                    updateItem(item, 'qtd_naoCompartilhada', e.target.value)
                "
              />
              <div class="underline"></div>
            </div>
          </template>

          <template #item-up_cycling="item">
            <label>
              <select
                @change="(e) => cyclingEdit(item, 'up', e.target.value)"
                :disabled="item.isReadonly"
              >
                <option value="Sim" :selected="item.up_cycling === 'Sim'">
                  Sim
                </option>
                <option value="Não" :selected="item.up_cycling === 'Não'">
                  Não
                </option>
              </select>
            </label>
          </template>

          <template #item-down_cycling="item">
            <label>
              <select
                @change="(e) => cyclingEdit(item, 'down', e.target.value)"
                :disabled="item.isReadonly"
              >
                <option value="Sim" :selected="item.down_cycling === 'Sim'">
                  Sim
                </option>
                <option value="Não" :selected="item.down_cycling === 'Não'">
                  Não
                </option>
              </select>
            </label>
          </template>

          <template #empty-message>
            <span style="font-size: 14px; color: #c1cad4">
              Nenhum item cadastrado.
            </span>
          </template>
        </EasyDataTable>
      </template>

      <template #item-operation="item">
        <div class="operation-wrapper" style="margin-top: 2px">
          <img
            src="../../assets/images/delete.png"
            class="operation-icon"
            style="width: 18px; margin-right: 2.5px; cursor: pointer"
            @click="btnDeleteItem(item)"
          />
          <img
            :src="
              item.isReadonly
                ? require('../../assets/images/edit.png')
                : require('../../assets/images/save.png')
            "
            class="operation-icon"
            style="width: 18px; margin-left: 2.5px; cursor: pointer"
            @click="btnEditItem(item)"
          />
        </div>
      </template>

      <template #empty-message>
        <span style="font-size: 14px; color: #c1cad4">
          Nenhum item cadastrado.
        </span>
      </template>
    </EasyDataTable>
    <Notifications />
  </div>
</template>

<script>
import api from "../../api/api";
import { nextTick, ref, watch } from "vue";
import { useRouter } from "vue-router";
import BtnBack from "@/components/Nav/BtnBack.vue";
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

const headers = [
  { text: "ID", value: "id" },
  { text: "TIPO DO ITEM", value: "type_item" },
  { text: "MATERIAL", value: "material" },
  { text: "DESCRICAO", value: "descricao" },
  { text: "COMPOS. QUIMICA", value: "compos_quimica" },
  { text: "QUANTIDADE", value: "quantidade" },
  { text: "UNIDADE", value: "unidade" },
  { text: "AÇÃO", value: "operation" },
];

const loading = ref(true);
const items = ref([]);
const searchField = ref("descricao");
const searchValue = ref("");

export default {
  name: "Itens",
  setup() {
    const router = useRouter();
    const typeEdit = (item, newValue) => {
      items.value = items.value.map((i) =>
        i.id === item.id
          ? {
              ...i,
              type_item: newValue,
            }
          : i
      );
    };

    const cyclingEdit = (item, ref, newValue) => {
      var up = "";
      var down = "";

      if (ref === "up" && newValue === "Não") {
        down = "Sim";
        up = "Não";
      } else {
        down = "Não";
        up = "Sim";
      }

      items.value = items.value.map((i) =>
        i.id === item.id
          ? {
              ...i,
              up_cycling: up,
              down_cycling: down,
            }
          : i
      );
    };

    const updateItem = (item, key, value) => {
      item[key] = value;

      const index = items.value.findIndex((i) => i.id === item.id);

      if (index !== -1) {
        items.value.splice(index, 1, { ...item });
      }
    };

    const btnDeleteItem = (val) => {
      api.delete("/itens/C1/deleteItem/" + val.id).then(() => {
        items.value = items.value.filter((item) => item.id !== val.id);
      });
    };

    const btnEditItem = (item) => {
      items.value = items.value.map((i) =>
        i.id === item.id
          ? {
              ...i,
              isReadonly: !i.isReadonly,
            }
          : i
      );

      if (!item.isReadonly) {
        api
          .put("/itens/C1/editItem", {
            data: item,
          })
          .then(() => {
            notify({
              title: "Notificação",
              text: "Item atualizado com sucesso!",
              type: "success", // Tipos possíveis: 'success', 'error', 'warning', etc.
              duration: 3000,
              pauseOnHover: true,
              closeOnClick: true,
            });
          })
          .catch((err) => {
            notify({
              title: "Notificação",
              text: "Erro ao atualizar o item! " + err,
              type: "error", // Tipos possíveis: 'success', 'error', 'warning', etc.
              duration: 10000,
              pauseOnHover: true,
              closeOnClick: false,
            });
          });
      }
    };

    const enableEdit = (item) => {
      items.value = items.value.map((i) =>
        i.id === item.id
          ? {
              ...i,
              isReadonly: false,
            }
          : i
      );
    };

    const disableEdit = (item) => {
      items.value = items.value.map((i) =>
        i.id === item.id
          ? {
              ...i,
              isReadonly: true,
            }
          : i
      );
    };

    const backPage = () => {
      router.go(-1);
    };

    return {
      backPage,
      items,
      headers,
      loading,
      searchField,
      searchValue,
      updateItem,
      btnDeleteItem,
      btnEditItem,
      enableEdit,
      disableEdit,
      typeEdit,
      cyclingEdit,
    };
  },
  mounted() {
    api.get("/itens/C1/getAllItems").then((response) => {
      console.log(response.data);
      items.value = response.data.map((i) => ({
        ...i,
        isReadonly: true,
      }));
      loading.value = false;
    });
  },
  components: {
    BtnBack,
  },
};
</script>

<style scoped>
.mainPage {
  margin-top: 0.5%;
  margin-right: 1%;
  font-family: Avenir, AvenirLocal, Helvetica, Arial, sans-serif;
}

.CustomTable {
  --easy-table-border: 1px solid #ffffff;
  --easy-table-row-border: 1px solid #ffffff;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 10px;
  --easy-table-header-font-color: #000000; /* Preto para o texto do cabeçalho */
  --easy-table-header-background-color: #ffffff; /* Fundo branco */
  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #4b4b4b; /* Preto para o texto */
  --easy-table-body-even-row-background-color: #ffffff; /* Fundo branco nas linhas pares */

  --easy-table-body-row-font-color: #4b4b4b; /* Preto para o texto nas linhas ímpares */
  --easy-table-body-row-background-color: #ffffff; /* Fundo branco nas linhas ímpares */
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #4b4b4b; /* Preto no hover */
  --easy-table-body-row-hover-background-color: transparent; /* Leve contraste no hover */

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #ffffff; /* Fundo branco no rodapé */
  --easy-table-footer-font-color: #4b4b4b; /* Texto preto no rodapé */
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;

  --easy-table-scrollbar-track-color: #ffffff;
  --easy-table-scrollbar-color: #ffffff;
  --easy-table-scrollbar-thumb-color: #dcdcdc; /* Um leve contraste para a barra de rolagem */
  --easy-table-scrollbar-corner-color: #ffffff;

  --easy-table-loading-mask-background-color: #ffffff;
  text-align: center;
}

.SubTable {
  --da0d4328: 60px !important;
  --easy-table-border: 1px solid #ffffff;
  --easy-table-row-border: 1px solid #ffffff;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 2px;
  --easy-table-header-font-color: #000000; /* Preto para o texto do cabeçalho */
  --easy-table-header-background-color: #ffffff; /* Fundo branco */
  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #4b4b4b; /* Preto para o texto */
  --easy-table-body-even-row-background-color: #ffffff; /* Fundo branco nas linhas pares */

  --easy-table-body-row-font-color: y; /* Preto para o texto nas linhas ímpares */
  --easy-table-body-row-background-color: #ffffff; /* Fundo branco nas linhas ímpares */
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #4b4b4b; /* Preto no hover */
  --easy-table-body-row-hover-background-color: #4b4b4b09; /* Leve contraste no hover */

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #ffffff; /* Fundo branco no rodapé */
  --easy-table-footer-font-color: #4b4b4b; /* Texto preto no rodapé */
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;

  --easy-table-scrollbar-track-color: #ffffff;
  --easy-table-scrollbar-color: #ffffff;
  --easy-table-scrollbar-thumb-color: #dcdcdc; /* Um leve contraste para a barra de rolagem */
  --easy-table-scrollbar-corner-color: #ffffff;

  --easy-table-loading-mask-background-color: #ffffff;
  text-align: center;
}

* {
  box-sizing: border-box;
  letter-spacing: 0.05rem;
  outline: 0 none;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  padding: 30px;
}

label {
  position: relative;
  display: inline-block;
}

label:before {
  content: "";
  height: 31px; /* $height - 5 */
  position: absolute;
  right: 7px;
  top: 3px;
  width: 22px;
  background: #fff; /* for Firefox in Android */
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  pointer-events: none;
  display: block;
}

label:after {
  content: " ";
  position: absolute;
  right: 15px;
  top: 46%;
  margin-top: -3px;
  z-index: 2;
  pointer-events: none;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6.9px 4px 0 4px;
  border-color: #aaa transparent transparent transparent;
  pointer-events: none;
}

label select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0 30px 0 10px;
  border: none;
  text-align: center;
  border-radius: 3px;
  line-height: 36px; /* $height */
  height: 36px; /* $height */
  background: #fff;
  margin: 0 5px 5px 0;
  font-family: Avenir, AvenirLocal, Helvetica, Arial, sans-serif;
  color: #4b4b4b;
}

select::-ms-expand {
  display: none;
}

.input-container {
  position: relative;
  width: 100%;
}

input[type="text"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  color: #4b4b4b;
  text-align: center;
  font-size: 14px;
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

input[type="text"]::selection {
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
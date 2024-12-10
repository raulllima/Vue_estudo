<template>
  <div class="demo-page">
    <div class="demo-page-navigation">
      <nav>
        <ul>
          <li>
            <BtnBack @click="backPage"></BtnBack>
          </li>
          <!-- <li>
            <BtnContinue @click="nextPage"></BtnContinue>
          </li> -->
        </ul>
      </nav>
    </div>

    <div class="content">
      <!-- Table - Investimento -->
      <h3>Investimentos</h3>

      <div class="btnAddNewLine">
        <img
          @click="btnAddNewLine(1)"
          src="../../assets/images/add.png"
          alt=""
          style="width: 18px; cursor: pointer"
        />
        <button @click="btnAddNewLine(1)">Adicionar item</button>
      </div>

      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        buttons-pagination
        :hide-footer="objViewFooter.tableInvestimentos"
        :rows-per-page="10"
        :loading="loading"
        :headers="[
          { text: 'CLASSIFICAÇÃO', value: 'classificacao', width: 165 },
          { text: 'DESCRIÇÃO', value: 'descricao' },
          { text: 'QTDE', value: 'qtde' },
          { text: 'VALOR', value: 'valor' },
          { text: 'TOTAL', value: 'total', width: 125 },
          { text: 'AÇÃO', value: 'operation' },
        ]"
        :items="itemsInvestimentos"
      >
        <template #item-classificacao="item">
          <label>
            <select
              @change="(e) => typeEdit(item, e.target.value, 1)"
              :disabled="item.isReadonly"
            >
              <option
                value="Equipamento"
                :selected="item.classificacao === 'Equipamento'"
              >
                Equipamento
              </option>
              <option
                value="Mat. Escr/adm"
                :selected="item.classificacao === 'Mat. Escr/adm'"
              >
                Mat. Escr/adm
              </option>
              <option
                value="Outros"
                :selected="item.classificacao === 'Outros'"
              >
                Outros
              </option>
            </select>
          </label>
        </template>

        <template #item-descricao="item">
          <div
            class="input-container"
            @keydown.enter="btnEditItem(item, 1)"
            @keydown.esc="disableEdit(item, 1)"
            @dblclick="enableEdit(item, 1)"
          >
            <input
              class="inputSetup"
              type="text"
              :readonly="item.isReadonly"
              :value="item.descricao"
              @copy.prevent
              @input="(e) => updateItem(item, 'descricao', e.target.value, 1)"
            />
            <div class="underline"></div>
          </div>
        </template>

        <template #item-qtde="item">
          <div
            class="input-container"
            @keydown.enter="btnEditItem(item, 1)"
            @keydown.esc="disableEdit(item, 1)"
            @dblclick="enableEdit(item, 1)"
          >
            <input
              class="inputSetup"
              type="text"
              :readonly="item.isReadonly"
              :value="item.qtde"
              @copy.prevent
              @input="(e) => updateItem(item, 'qtde', e.target.value, 1)"
            />
            <div class="underline"></div>
          </div>
        </template>

        <template #item-valor="item">
          <div
            class="input-container"
            @keydown.enter="btnEditItem(item, 1)"
            @keydown.esc="disableEdit(item, 1)"
            @dblclick="enableEdit(item, 1)"
          >
            <input
              class="inputSetup"
              type="text"
              data-js="number"
              :readonly="item.isReadonly"
              :value="item.valor"
              @copy.prevent
              @input="(e) => updateItem(item, 'valor', e.target.value, 1)"
            />
            <div class="underline"></div>
          </div>
        </template>

        <template #item-total="item">
          <div
            class="input-container columnTotal"
            @keydown.enter="btnEditItem(item, 1)"
            @keydown.esc="disableEdit(item, 1)"
            @dblclick="enableEdit(item, 1)"
          >
            <input
              class="inputSetup"
              type="text"
              data-js="money"
              readonly
              :value="item.valor ? item.qtde * item.valor : ''"
              @copy.prevent
              @input="(e) => updateItem(item, 'total', e.target.value, 1)"
            />
            <div class="underline"></div>
          </div>
        </template>

        <template #loading>
          <img src="../../assets/images/loading.gif" style="width: 30%" />
        </template>

        <template #item-operation="item">
          <div class="operation-wrapper" style="margin-top: 2px">
            <img
              v-if="!item.isNewItem"
              src="../../assets/images/delete.png"
              class="operation-icon"
              style="width: 18px; margin-right: 2.5px; cursor: pointer"
              @click="btnDeleteItem(item, 1)"
            />
            <img
              :src="
                !item.isReadonly
                  ? require('../../assets/images/save.png')
                  : require('../../assets/images/edit.png')
              "
              class="operation-icon"
              style="width: 18px; margin-left: 2.5px; cursor: pointer"
              @click="btnEditItem(item, 1)"
            />
          </div>
        </template>

        <template #empty-message>
          <span style="font-size: 14px; color: #c1cad4">
            Nenhum item encontrado.
          </span>
        </template>
      </EasyDataTable>

      <div class="footer">
        <span> Total: </span>
        <span> R$ {{ investimentosTotal }} </span>
      </div>

      <!-- Table - Custo -->
      <h3>Custos</h3>

      <div class="btnAddNewLine">
        <img
          @click="btnAddNewLine(2)"
          src="../../assets/images/add.png"
          alt=""
          style="width: 18px; cursor: pointer"
        />
        <button @click="btnAddNewLine(2)">Adicionar item</button>
      </div>

      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        buttons-pagination
        :hide-footer="objViewFooter.tableCustos"
        :rows-per-page="10"
        :loading="loading"
        :headers="[
          { text: 'CLASSIFICAÇÃO', value: 'classificacao', width: 165 },
          { text: 'DESCRIÇÃO', value: 'descricao' },
          { text: 'QTDE', value: 'qtde' },
          { text: 'VALOR', value: 'valor' },
          { text: 'TOTAL', value: 'total', width: 125 },
          { text: 'AÇÃO', value: 'operation' },
        ]"
        :items="itemsCustos"
      >
        <template #item-classificacao="item">
          <label>
            <select
              @change="(e) => typeEdit(item, e.target.value, 2)"
              :disabled="item.isReadonly"
            >
              <option
                value="Insumos eqpto"
                :selected="item.classificacao === 'Insumos eqpto'"
              >
                Insumos eqpto
              </option>
              <option
                value="Insumos escr"
                :selected="item.classificacao === 'Insumos escr'"
              >
                Insumos escr
              </option>
              <option
                value="Mão de obra"
                :selected="item.classificacao === 'Mão de obra'"
              >
                Mão de obra
              </option>
              <option
                value="Área ocupada"
                :selected="item.classificacao === 'Área ocupada'"
              >
                Área ocupada
              </option>
              <option
                value="Logist interna"
                :selected="item.classificacao === 'Logist interna'"
              >
                Logist interna
              </option>
              <option
                value="Logist reversa"
                :selected="item.classificacao === 'Logist reversa'"
              >
                Logist reversa
              </option>
              <option
                value="Manut eqptos"
                :selected="item.classificacao === 'Manut eqptos'"
              >
                Manut eqptos
              </option>
              <option
                value="Outros"
                :selected="item.classificacao === 'Outros'"
              >
                Outros
              </option>
            </select>
          </label>
        </template>

        <template #item-descricao="item">
          <div
            class="input-container"
            @keydown.enter="btnEditItem(item, 2)"
            @keydown.esc="disableEdit(item, 2)"
            @dblclick="enableEdit(item, 2)"
          >
            <input
              class="inputSetup"
              type="text"
              :readonly="item.isReadonly"
              :value="item.descricao"
              @copy.prevent
              @input="(e) => updateItem(item, 'descricao', e.target.value, 2)"
            />
            <div class="underline"></div>
          </div>
        </template>

        <template #item-qtde="item">
          <div
            class="input-container"
            @keydown.enter="btnEditItem(item, 2)"
            @keydown.esc="disableEdit(item, 2)"
            @dblclick="enableEdit(item, 2)"
          >
            <input
              class="inputSetup"
              type="text"
              :readonly="item.isReadonly"
              :value="item.qtde"
              @copy.prevent
              @input="(e) => updateItem(item, 'qtde', e.target.value, 2)"
            />
            <div class="underline"></div>
          </div>
        </template>

        <template #item-valor="item">
          <div
            class="input-container"
            @keydown.enter="btnEditItem(item, 2)"
            @keydown.esc="disableEdit(item, 2)"
            @dblclick="enableEdit(item, 2)"
          >
            <input
              class="inputSetup"
              type="text"
              data-js="number"
              :readonly="item.isReadonly"
              :value="item.valor"
              @copy.prevent
              @input="(e) => updateItem(item, 'valor', e.target.value, 2)"
            />
            <div class="underline"></div>
          </div>
        </template>

        <template #item-total="item">
          <div
            class="input-container columnTotal"
            @keydown.enter="btnEditItem(item, 2)"
            @keydown.esc="disableEdit(item, 2)"
            @dblclick="enableEdit(item, 2)"
          >
            <input
              class="inputSetup"
              type="text"
              data-js="money"
              readonly
              :value="item.valor ? item.qtde * item.valor : ''"
              @copy.prevent
              @input="(e) => updateItem(item, 'total', e.target.value, 2)"
            />
            <div class="underline"></div>
          </div>
        </template>

        <template #loading>
          <img src="../../assets/images/loading.gif" style="width: 30%" />
        </template>

        <template #item-operation="item">
          <div class="operation-wrapper" style="margin-top: 2px">
            <img
              v-if="!item.isNewItem"
              src="../../assets/images/delete.png"
              class="operation-icon"
              style="width: 18px; margin-right: 2.5px; cursor: pointer"
              @click="btnDeleteItem(item, 2)"
            />
            <img
              :src="
                !item.isReadonly
                  ? require('../../assets/images/save.png')
                  : require('../../assets/images/edit.png')
              "
              class="operation-icon"
              style="width: 18px; margin-left: 2.5px; cursor: pointer"
              @click="btnEditItem(item, 2)"
            />
          </div>
        </template>

        <template #empty-message>
          <span style="font-size: 14px; color: #c1cad4">
            Nenhum item encontrado.
          </span>
        </template>
      </EasyDataTable>

      <div class="footer">
        <span> Total: </span>
        <span> R$ {{ custosTotal }} </span>
      </div>
    </div>
    <Notifications />
  </div>
</template>
    
<script>
import api from "../../api/api.js";
import { ref, watch, toRaw, isProxy } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import BtnBack from "@/components/Nav/BtnBack.vue";
import BtnContinue from "@/components/Nav/BtnContinue.vue";

import { useNotification } from "@kyvg/vue3-notification";
import { format, unformat } from "v-money3";

const configMask = {
  debug: false,
  masked: false,
  prefix: "",
  suffix: "",
  thousands: ".",
  decimal: ",",
  precision: 2,
  disableNegative: false,
  disabled: false,
  min: null,
  max: null,
  allowBlank: false,
  minimumNumberOfCharacters: 0,
  modelModifiers: {
    number: false,
  },
  shouldRound: true,
  focusOnRight: false,
};

const { notify } = useNotification();
const loading = ref(true);

const itemsInvestimentos = ref([]);
const itemsInvestimentosToCompare = ref([]);
const itemsCustos = ref([]);
const itemsCustosToCompare = ref([]);
const objViewFooter = ref({
  tableInvestimentos: true,
  tableCustos: true,
});

export default {
  name: "C1-Investimentos",
  setup() {
    const router = useRouter();
    const store = useStore();

    const investimentosTotal = ref(0);
    const custosTotal = ref(0);

    watch(itemsInvestimentos, (newItems) => {
      let itens = itemsInvestimentos.value.map((item, index) => {
        item.total = parseFloat(item.qtde) * parseFloat(item.valor);

        return {
          ...item,
        };
      });

      investimentosTotal.value = format(
        itens.reduce((total, i) => {
          const parsedTotal = parseFloat(i.total);
          if (!isNaN(parsedTotal)) {
            return total + parsedTotal;
          }
          return total;
        }, 0),
        configMask
      );
    });

    watch(itemsCustos, (newItems) => {
      let itens = itemsCustos.value.map((item, index) => {
        item.total = parseFloat(item.qtde) * parseFloat(item.valor);

        return {
          ...item,
        };
      });
      custosTotal.value = format(
        itens.reduce((total, i) => {
          const parsedTotal = parseFloat(i.total);
          if (!isNaN(parsedTotal)) {
            return total + parsedTotal;
          }
          return total;
        }, 0),
        configMask
      );
    });

    const typeEdit = (item, newValue, key) => {
      if (key === 1) {
        itemsInvestimentos.value = itemsInvestimentos.value.map((i) =>
          i.id === item.id
            ? {
                ...i,
                classificacao: newValue,
              }
            : i
        );
      } else {
        itemsCustos.value = itemsCustos.value.map((i) =>
          i.id === item.id
            ? {
                ...i,
                classificacao: newValue,
              }
            : i
        );
      }
    };

    const updateItem = (item, obj, value, key) => {
      if (key === 1) {
        item[obj] = value;
        const index = itemsInvestimentos.value.findIndex(
          (i) => i.id === item.id
        );

        if (index !== -1) {
          itemsInvestimentos.value.splice(index, 1, { ...item });
        }
      } else {
        item[obj] = value;
        const index = itemsCustos.value.findIndex((i) => i.id === item.id);

        if (index !== -1) {
          itemsCustos.value.splice(index, 1, { ...item });
        }
      }
    };

    const disableEdit = (item, key) => {
      if (key === 1) {
        itemsInvestimentos.value = itemsInvestimentos.value.map((i) =>
          i.id === item.id
            ? {
                ...i,
                isReadonly: true,
              }
            : i
        );
      } else {
        itemsCustos.value = itemsCustos.value.map((i) =>
          i.id === item.id
            ? {
                ...i,
                isReadonly: true,
              }
            : i
        );
      }
    };

    const enableEdit = (item, key) => {
      if (key === 1) {
        itemsInvestimentos.value = itemsInvestimentos.value.map((i) =>
          i.id === item.id
            ? {
                ...i,
                isReadonly: false,
              }
            : i
        );
      } else {
        itemsCustos.value = itemsCustos.value.map((i) =>
          i.id === item.id
            ? {
                ...i,
                isReadonly: false,
              }
            : i
        );
      }
    };

    const btnAddNewLine = (id) => {
      if (id === 1) {
        let nextId = 1;

        if (itemsInvestimentos.value.length > 0) {
          nextId = itemsInvestimentos.value.reduce((max, item) => {
            return item.id > max ? item.id : max;
          }, nextId);
        }

        itemsInvestimentos.value.push({
          id: nextId + 1,
          classificacao: "Insumos eqpto",
          descricao: "",
          quantidade: "",
          valor: "",
          total: "",
          isNewItem: true,
        });

        if (itemsInvestimentos.value.length > 10) {
          objViewFooter.value.tableInvestimentos = false;
        }
      } else {
        let nextId = 1;

        if (itemsCustos.value.length > 0) {
          nextId = itemsCustos.value.reduce((max, item) => {
            return item.id > max ? item.id : max;
          }, nextId);
        }

        itemsCustos.value.push({
          id: nextId + 1,
          classificacao: "Equipamento",
          descricao: "",
          quantidade: "",
          valor: "",
          total: "",
          isNewItem: true,
        });

        if (itemsCustos.value.length > 10) {
          objViewFooter.value.tableCustos = false;
        }
      }
    };

    const btnDeleteItem = (itemObj, key) => {
      let currentTable = key === 1 ? "investimentos" : "custos";

      api.delete(`/${currentTable}/C1/deleteItem/` + itemObj.id).then(() => {
        if (key === 1) {
          itemsInvestimentos.value = itemsInvestimentos.value.filter(
            (item) => item.id !== itemObj.id
          );
        } else {
          itemsCustos.value = itemsCustos.value.filter(
            (item) => item.id !== itemObj.id
          );
        }
      });
    };

    const btnEditItem = (itemObj, key) => {
      // Validação do preenchdimento dos campos.
      if (!itemObj.descricao || !itemObj.qtde || !itemObj.valor) {
        return notify({
          title: "Notificação",
          text: "Preencha todos os campos para cadastrar um novo item!",
          type: "warning", // Tipos possíveis: 'success', 'error', 'warning', etc.
          duration: 10000,
          pauseOnHover: true,
          closeOnClick: false,
        });
      }

      // Resultado da comparação das alterações
      let diffJson;

      // Definição dos endpoint e tipo da tabela
      let endpointRoute = itemObj.isNewItem ? "createItem" : "editItem";
      let currentTable = key === 1 ? "investimentos" : "custos";

      if (key === 1) {
        itemsInvestimentos.value = itemsInvestimentos.value.map((i) =>
          i.id === itemObj.id
            ? {
                ...i,
                isReadonly: !i.isReadonly,
                ...(delete itemObj.isNewItem, {}),
              }
            : i
        );
        if (itemsInvestimentosToCompare.value) {
          const itemIndex = itemsInvestimentos.value.findIndex(
            (i) => i.id === itemObj.id
          );

          if (
            itemIndex !== -1 &&
            toRaw(itemsInvestimentosToCompare.value)[itemIndex]
          ) {
            const {
              key: keyOne,
              isReadonly: isReadonlyOne,
              isNewItem: isNewItemOne,
              ...ObjectOne
            } = itemObj;

            const {
              key: keyTwo,
              isReadonly: isReadonlyTwo,
              isNewItem: isNewItemTwo,
              ...ObjectTwo
            } = toRaw(itemsInvestimentosToCompare.value)[itemIndex];

            diffJson = JSON.stringify(ObjectOne) === JSON.stringify(ObjectTwo);
          } else {
            diffJson = false;
          }
        }
      } else {
        itemsCustos.value = itemsCustos.value.map((i) =>
          i.id === itemObj.id
            ? {
                ...i,
                isReadonly: !i.isReadonly,
                ...(delete itemObj.isNewItem, {}),
              }
            : i
        );
        if (itemsCustosToCompare.value) {
          const itemIndex = itemsCustos.value.findIndex(
            (i) => i.id === itemObj.id
          );

          if (
            itemIndex !== -1 &&
            toRaw(itemsCustosToCompare.value)[itemIndex]
          ) {
            const {
              key: keyOne,
              isReadonly: isReadonlyOne,
              isNewItem: isNewItemOne,
              ...ObjectOne
            } = itemObj;

            const {
              key: keyTwo,
              isReadonly: isReadonlyTwo,
              isNewItem: isNewItemTwo,
              ...ObjectTwo
            } = toRaw(itemsCustosToCompare.value)[itemIndex];

            diffJson = JSON.stringify(ObjectOne) === JSON.stringify(ObjectTwo);
          } else {
            diffJson = false;
          }
        }
      }

      if (endpointRoute === "editItem") {
        if (!itemObj.isReadonly && !diffJson) {
          api
            .put(`/${currentTable}/C1/` + endpointRoute, {
              data: itemObj,
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
      } else {
        if (!itemObj.isReadonly) {
          api
            .post(`/${currentTable}/C1/` + endpointRoute, {
              data: itemObj,
            })
            .then(() => {
              notify({
                title: "Notificação",
                text: "Item criado com sucesso!",
                type: "success", // Tipos possíveis: 'success', 'error', 'warning', etc.
                duration: 3000,
                pauseOnHover: true,
                closeOnClick: true,
              });
            })
            .catch((err) => {
              notify({
                title: "Notificação",
                text: "Erro ao criar o item! " + err,
                type: "error", // Tipos possíveis: 'success', 'error', 'warning', etc.
                duration: 10000,
                pauseOnHover: true,
                closeOnClick: false,
              });
            });
        }
      }
    };

    const backPage = () => {
      router.go(-1);
    };

    return {
      configMask,
      loading,
      itemsInvestimentos,
      investimentosTotal,
      itemsCustos,
      custosTotal,
      backPage,
      objViewFooter,
      typeEdit,
      disableEdit,
      updateItem,
      enableEdit,
      btnAddNewLine,
      btnDeleteItem,
      btnEditItem,
    };
  },
  mounted() {
    api.get("/investimentos/C1/getAllItems").then((response) => {
      if (response.status === 204) loading.value = false;
      if (response.status !== 200) return {};

      itemsInvestimentos.value = response.data.map((i) => ({
        ...i,
        isReadonly: true,
      }));
      itemsInvestimentosToCompare.value = itemsInvestimentos.value;
      loading.value = false;
    });

    api.get("/custos/C1/getAllItems").then((response) => {
      if (response.status === 204) loading.value = false;
      if (response.status !== 200) return {};

      itemsCustos.value = response.data.map((i) => ({
        ...i,
        isReadonly: true,
      }));
      itemsCustosToCompare.value = itemsCustos.value;
      loading.value = false;
    });
  },
  components: {
    BtnBack,
    BtnContinue,
  },
};
</script>
      
<style scoped>
.content h3:first-child {
  margin-top: 32px;
}

.content h3 {
  margin-top: 15px;
  font-size: 22px;
  text-align: center;
}

.btnAddNewLine {
  display: flex;
  font-size: 13.5px;
  align-items: center;
}

.btnAddNewLine button {
  margin-left: 6px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.columnTotal {
  display: flex;
  justify-content: space-between;
}

.footer {
  display: flex;
  height: 35px;
  justify-content: center;
  align-items: center;
  background: white;
  color: #4b4b4b;
}

.footer span:first-child {
  color: #000000;
}

.CustomTable:last-child {
  margin-bottom: 150px;
}

.CustomTable {
  margin-top: 10px;
  --da0d4328: 60px !important;

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
  --easy-table-body-row-height: 40px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #4b4b4b; /* Preto no hover */
  --easy-table-body-row-hover-background-color: #f0f0f0; /* Leve contraste no hover */

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
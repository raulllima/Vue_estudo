<template>
  <div class="demo-page">
    <div class="demo-page-navigation">
      <nav>
        <ul>
          <li>
            <BtnBack @click="backPage"></BtnBack>
          </li>
          <li>
            <BtnContinue @click="nextPage"></BtnContinue>
          </li>
        </ul>
      </nav>
    </div>

    <div class="content">
      <!-- Table - Quantidade -->
      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Renovável', value: 'qtdRenovavel' },
          { text: 'Não Renovável', value: 'qtdNaoRenovavel' },
          { text: 'Reciclável', value: 'qtdReciclavel' },
          { text: 'Up Cycling', value: 'qtdUpCycling' },
          { text: 'Down Cycling', value: 'qtdDownCycling' },
        ]"
        :items="itemsQtd"
      >
        <template #loading>
          <img src="../../assets/images/loading.gif" style="width: 30%" />
        </template>

        <template #empty-message>
          <span style="font-size: 14px; color: #c1cad4">
            Nenhum item encontrado.
          </span>
        </template>
      </EasyDataTable>

      <!-- Table - IC-CP1 -->
      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Qtde Total de Itens', value: 'quantidade' },
          { text: 'Renovável', value: 'renovavel' },
          { text: 'Reciclável', value: 'reciclavel' },
          { text: 'Não Renovável', value: 'nao_renovavel' },
          { text: 'Unidade', value: 'unidade' },
        ]"
        :items="itemsRE1"
      >
        <template #loading>
          <img src="../../assets/images/loading.gif" style="width: 30%" />
        </template>

        <template #empty-message>
          <span style="font-size: 14px; color: #c1cad4">
            Nenhum item encontrado.
          </span>
        </template>
      </EasyDataTable>

      <!-- Table - IC-CP2 -->
      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Peso Total de Itens', value: 'peso_total_itens' },
          { text: 'Renovável', value: 'renovavel' },
          { text: 'Reciclável', value: 'reciclavel' },
          { text: 'Não Renovável', value: 'nao_renovavel' },
          { text: 'Unidade', value: 'unidade' },
        ]"
        :items="itemsRE2"
      >
        <template #loading>
          <img src="../../assets/images/loading.gif" style="width: 30%" />
        </template>

        <template #empty-message>
          <span style="font-size: 14px; color: #c1cad4">
            Nenhum item encontrado.
          </span>
        </template>
      </EasyDataTable>

      <!-- Table - IC-CP3 -->
      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Custo Total de Itens', value: 'custo_total_itens' },
          { text: 'Renovável', value: 'renovavel' },
          { text: 'Reciclável', value: 'reciclavel' },
          { text: 'Não Renovável', value: 'nao_renovavel' },
          { text: 'Unidade', value: 'unidade' },
        ]"
        :items="itemsRE3"
      >
        <template #loading>
          <img src="../../assets/images/loading.gif" style="width: 30%" />
        </template>

        <template #empty-message>
          <span style="font-size: 14px; color: #c1cad4">
            Nenhum item encontrado.
          </span>
        </template>
      </EasyDataTable>

      <!-- Table - IC-CP4 -->
      <EasyDataTable
        table-class-name="CustomTable SetupColor"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Qtde', value: 'quantidade' },
          { text: 'Total de Itens', value: 'total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'UPCYCLING', value: 'upcycling' },
          { text: 'DOWNCYCLING', value: 'downcycling' },
        ]"
        :items="itemsRE4"
      >
        <template #loading>
          <img src="../../assets/images/loading.gif" style="width: 30%" />
        </template>

        <template #empty-message>
          <span style="font-size: 14px; color: #c1cad4">
            Nenhum item encontrado.
          </span>
        </template>
      </EasyDataTable>

      <!-- Table - IC-CP5 -->
      <EasyDataTable
        table-class-name="CustomTable SetupColor"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Peso', value: 'peso' },
          { text: 'Peso Total de Itens', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'UPCYCLING', value: 'upcycling' },
          { text: 'DOWNCYCLING', value: 'downcycling' },
        ]"
        :items="itemsRE5"
      >
        <template #loading>
          <img src="../../assets/images/loading.gif" style="width: 30%" />
        </template>

        <template #empty-message>
          <span style="font-size: 14px; color: #c1cad4">
            Nenhum item encontrado.
          </span>
        </template>
      </EasyDataTable>
    </div>
  </div>
</template>
  
<script>
import api from "../../api/api.js";
import { ref, watch, toRaw } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import BtnBack from "@/components/Nav/BtnBack.vue";
import BtnContinue from "@/components/Nav/BtnContinue.vue";

const rawDataApi = ref("");

const itemsQtd = ref([]);
const itemsRE1 = ref([]);
const itemsRE2 = ref([]);
const itemsRE3 = ref([]);
const itemsRE4 = ref([]);
const itemsRE5 = ref([]);

const formatNumbers = () => {
  document.querySelectorAll("td").forEach(($td) => {
    const masks = {
      number(value) {
        let cleanValue = value.replace(/[^\d,]/g, "");
        const parts = cleanValue.split(",");

        if (parts.length > 1) {
          cleanValue = parts[0] + "," + parts[1].slice(0, 2); // Limita a parte decimal a 2 dígitos
        }

        let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        if (parts.length > 1) {
          cleanValue = integerPart + "," + parts[1];
        } else {
          cleanValue = integerPart;
        }

        return cleanValue;
      },
    };

    function isNumeric(value) {
      const cleanValue = value.trim();

      const isValidNumber = /^-?\d+([.,]\d+)?$/.test(cleanValue);

      return isValidNumber;
    }

    if (isNumeric($td.textContent)) {
      $td.textContent = masks["number"]($td.textContent);
    }
  });
};

export default {
  name: "validar2",
  setup() {
    const router = useRouter();
    const store = useStore();

    const nextPage = () => {
      router.beforeEach(async (to, from, next) => {
        if (to.meta.shouldFetch) {
          const data = {
            RE1: toRaw(itemsRE1.value[0]),
            RE2: toRaw(itemsRE2.value[0]),
            RE3: toRaw(itemsRE3.value[0]),
            RE4: toRaw(itemsRE4.value[0]),
            RE5: toRaw(itemsRE5.value[0]),
          };
          to.meta.data = data;
        }
        next();
      });

      router.push({
        name: "C2-VerificarViabilidade",
      });
      store.dispatch("updateViewVerificarViabilidade", false);
    };

    const backPage = () => {
      router.go(-1);
    };

    return {
      nextPage,
      backPage,
      itemsQtd,
      itemsRE1,
      itemsRE2,
      itemsRE3,
      itemsRE4,
      itemsRE5,
    };
  },
  mounted() {
    api
      .get("/itens/C2/getAllItems")
      .then((response) => {
        if (response.data.length === 0) return {};
        const data = response.data;

        rawDataApi.value = data;

        itemsQtd.value[0] = {
          qtdRenovavel: data.filter((i) => i.type_item === "Renovável").length,
          qtdNaoRenovavel: data.filter((i) => i.type_item === "Não Renovável")
            .length,
          qtdReciclavel: data.filter((i) => i.type_item === "Reciclável")
            .length,
          qtdUpCycling: data.filter((i) => i.up_cycling === "Sim").length,
          qtdDownCycling: data.filter((i) => i.down_cycling === "Sim").length,
        }; 
 
        const setupItemsCP1 = (() => {
          console.log(data)
          itemsRE1.value[0] = {
            quantidade: data.reduce((total, item) => {
              return total + parseFloat(item.demanda_mensal);
            }, 0),
            renovavel: data
              .filter((i) => i.type_item === "Renovável")
              .reduce((total, item) => {
                return total + parseFloat(item.demanda_mensal);
              }, 0),
            reciclavel: data
              .filter((i) => i.type_item === "Reciclável")
              .reduce((total, item) => {
                return total + parseFloat(item.demanda_mensal);
              }, 0),
            nao_renovavel: data
              .filter((i) => i.type_item === "Não Renovável")
              .reduce((total, item) => {
                return total + parseFloat(item.demanda_mensal);
              }, 0),
            unidade: "PÇ",
          };

          Object.assign(itemsRE1.value[0], {
            renovavel: `${itemsRE1.value[0].renovavel} / (${
              (
                (itemsRE1.value[0].renovavel / itemsRE1.value[0].quantidade) *
                100
              ).toFixed(1) + "%"
            })`,
            reciclavel: `${itemsRE1.value[0].reciclavel} / (${
              (
                (itemsRE1.value[0].reciclavel / itemsRE1.value[0].quantidade) *
                100
              ).toFixed(1) + "%"
            })`,
            nao_renovavel: `${itemsRE1.value[0].nao_renovavel} / (${
              (
                (itemsRE1.value[0].nao_renovavel /
                  itemsRE1.value[0].quantidade) *
                100
              ).toFixed(1) + "%"
            })`,
          });
        })();

        const setupItemsCP2 = (() => {
          itemsRE2.value[0] = {
            peso_total_itens: data.reduce((total, item) => {
              return (
                total +
                parseFloat(item.demanda_mensal) * parseFloat(item.peso_unit_kg)
              );
            }, 0),
            renovavel: data
              .filter((i) => i.type_item === "Renovável")
              .reduce((total, item) => {
                return (
                  total +
                  parseFloat(item.demanda_mensal) *
                    parseFloat(item.peso_unit_kg)
                );
              }, 0),
            reciclavel: data
              .filter((i) => i.type_item === "Reciclável")
              .reduce((total, item) => {
                return (
                  total +
                  parseFloat(item.demanda_mensal) *
                    parseFloat(item.peso_unit_kg)
                );
              }, 0),
            nao_renovavel: data
              .filter((i) => i.type_item === "Não Renovável")
              .reduce((total, item) => {
                return (
                  total +
                  parseFloat(item.demanda_mensal) *
                    parseFloat(item.peso_unit_kg)
                );
              }, 0),
            unidade: "KG",
          };
          Object.assign(itemsRE2.value[0], {
            renovavel: `${itemsRE2.value[0].renovavel} / (${
              (
                (itemsRE2.value[0].renovavel /
                  itemsRE2.value[0].peso_total_itens) *
                100
              ).toFixed(1) + "%"
            })`,
            reciclavel: `${itemsRE2.value[0].reciclavel} / (${
              (
                (itemsRE2.value[0].reciclavel /
                  itemsRE2.value[0].peso_total_itens) *
                100
              ).toFixed(1) + "%"
            })`,
            nao_renovavel: `${itemsRE2.value[0].nao_renovavel} / (${
              (
                (itemsRE2.value[0].nao_renovavel /
                  itemsRE2.value[0].peso_total_itens) *
                100
              ).toFixed(1) + "%"
            })`,
          });
        })();

        const setupItemsCP3 = (() => {
          itemsRE3.value[0] = {
            custo_total_itens: data.reduce((total, item) => {
              return (
                total +
                parseFloat(item.demanda_mensal) * parseFloat(item.custo_unit)
              );
            }, 0),
            renovavel: data
              .filter((i) => i.type_item === "Renovável")
              .reduce((total, item) => {
                return (
                  total +
                  parseFloat(item.demanda_mensal) * parseFloat(item.custo_unit)
                );
              }, 0),
            reciclavel: data
              .filter((i) => i.type_item === "Reciclável")
              .reduce((total, item) => {
                return (
                  total +
                  parseFloat(item.demanda_mensal) * parseFloat(item.custo_unit)
                );
              }, 0),
            nao_renovavel: data
              .filter((i) => i.type_item === "Não Renovável")
              .reduce((total, item) => {
                return (
                  total +
                  parseFloat(item.demanda_mensal) * parseFloat(item.custo_unit)
                );
              }, 0),
            unidade: "KG",
          };

          Object.assign(itemsRE3.value[0], {
            renovavel: `${itemsRE3.value[0].renovavel} / (${
              (
                (itemsRE3.value[0].renovavel /
                  itemsRE3.value[0].custo_total_itens) *
                100
              ).toFixed(1) + "%"
            })`,
            reciclavel: `${itemsRE3.value[0].reciclavel} / (${
              (
                (itemsRE3.value[0].reciclavel /
                  itemsRE3.value[0].custo_total_itens) *
                100
              ).toFixed(1) + "%"
            })`,
            nao_renovavel: `${itemsRE3.value[0].nao_renovavel} / (${
              (
                (itemsRE3.value[0].nao_renovavel /
                  itemsRE3.value[0].custo_total_itens) *
                100
              ).toFixed(1) + "%"
            })`,
          });
        })();

        const setupItemsCP4 = (() => {
          itemsRE4.value[0] = {
            quantidade: 0,
            total_itens: itemsRE1.value[0].quantidade,
            unidade: "PÇ",
          };

          Object.assign(itemsRE4.value[0], {
            upcycling:
              (
                (itemsRE4.value[0].quantidade / itemsRE4.value[0].total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsRE4.value[0], {
            downcycling:
              (
                (1 -
                  itemsRE4.value[0].quantidade /
                    itemsRE4.value[0].total_itens) *
                100
              ).toFixed(1) + " %",
          });

        })();

        const setupItemsCP5 = (() => {
          itemsRE5.value[0] = {
            peso: 0,
            peso_total_itens: itemsRE2.value[0].peso_total_itens,
            unidade: "KG",
          };

          Object.assign(itemsRE5.value[0], {
            upcycling:
              (
                (itemsRE5.value[0].peso / itemsRE5.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsRE5.value[0], {
            downcycling:
              (
                (1 -
                itemsRE5.value[0].peso /
                itemsRE5.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        
        })();
      })
      .then(() => {
        formatNumbers();

        document.querySelectorAll("th").forEach(($th) => {
          if ($th.textContent === "Renovável") {
            $th.style.color = "green";
          } else if ($th.textContent === "Não Renovável") {
            $th.style.color = "red";
          } else if ($th.textContent === "Reciclável") {
            $th.style.color = "rgb(192, 192, 0)";
          }
        });
      });
  },
  components: {
    BtnBack,
    BtnContinue,
  },
};
</script>
  
  
<style scoped>
.CustomTable:last-child {
  margin-bottom: 150px;
}

.CustomTable {
  margin-top: 32px;
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
</style>
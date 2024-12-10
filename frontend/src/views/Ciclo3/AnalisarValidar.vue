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

      <!-- Table - IC-Rm1 -->
      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Qtde Itens Reman', value: 'qtde_itens_reman' },
          { text: 'Qtde Total Itens', value: 'qtde_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Reman', value: 'reman' },
          { text: 'Novos', value: 'novos' },
        ]"
        :items="itemsRM1"
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

      <!-- Table - IC-Rm2 -->
      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Peso Itens Reman', value: 'peso_itens_reman' },
          { text: 'Peso Total Itens', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Reman', value: 'reman' },
          { text: 'Novos', value: 'novos' },
        ]"
        :items="itemsRM2"
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

      <!-- Table - IC-Rm3 -->
      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Custo Itens Reman', value: 'custo_itens_reman' },
          { text: 'Custo Total Itens', value: 'custo_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Reman', value: 'reman' },
          { text: 'Novos', value: 'novos' },
        ]"
        :items="itemsRM3"
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

      <!-- Table - IC-Rm4 -->
      <EasyDataTable
        table-class-name="CustomTable SetupColor"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Renovável', value: 'renovável' },
          { text: 'Peso Total de Itens', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Indicador', value: 'indicador' },
        ]"
        :items="itemsRM4"
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

      <!-- Table - IC-Rm5 -->
      <EasyDataTable
        table-class-name="CustomTable SetupColor"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Não Renovável', value: 'nao_renovavel' },
          { text: 'Peso Total de Itens', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Indicador', value: 'indicador' },
        ]"
        :items="itemsRM5"
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

      <!-- Table - IC-Rm6 -->
      <EasyDataTable
        table-class-name="CustomTable SetupColor"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Reciclável', value: 'reciclavel' },
          { text: 'Peso Total de Itens', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Indicador', value: 'indicador' },
        ]"
        :items="itemsRM6"
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

      <!-- Table - IC-Rm7 -->
      <EasyDataTable
        table-class-name="CustomTable SetupColor"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Qtde', value: 'qtde' },
          { text: 'Total de Itens', value: 'total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'UPCYCLING', value: 'upcycling' },
          { text: ' DOWNCYCLING', value: 'downcycling' },
        ]"
        :items="itemsRM7"
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

      <!-- Table - IC-Rm8 -->
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
          { text: ' DOWNCYCLING', value: 'downcycling' },
        ]"
        :items="itemsRM8"
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
const itemsRM1 = ref([]);
const itemsRM2 = ref([]);
const itemsRM3 = ref([]);
const itemsRM4 = ref([]);
const itemsRM5 = ref([]);
const itemsRM6 = ref([]);
const itemsRM7 = ref([]);
const itemsRM8 = ref([]);

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
            RE1: toRaw(itemsRM1.value[0]),
            RE2: toRaw(itemsRM2.value[0]),
            RE3: toRaw(itemsRM3.value[0]),
            RE4: toRaw(itemsRM4.value[0]),
            RE5: toRaw(itemsRM5.value[0]),
          };
          to.meta.data = data;
        }
        next();
      });

      router.push({
        name: "C3-VerificarViabilidade",
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
      itemsRM1,
      itemsRM2,
      itemsRM3,
      itemsRM4,
      itemsRM5,
      itemsRM6,
      itemsRM7,
      itemsRM8,
    };
  },
  mounted() {
    api
      .get("/itens/C3/getAllItems")
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

        let itemAdjust = data.map((obj) => {
          let countSim = 0;

          for (let key in obj) {
            if (key !== "down_cycling") {
              if (obj[key] === "Sim") {
                countSim++;
              }
            }
          }
          return {
            ...obj,
            somatoria: countSim,
            peso_total_kg:
              parseFloat(obj.quantidade) * parseFloat(obj.peso_unit_kg),
            custo_total:
              parseFloat(obj.quantidade) * parseFloat(obj.custo_unit),
          };
        });

        console.log(itemAdjust);

        const setupItemsCP1 = (() => {
          itemsRM1.value[0] = {
            qtde_itens_reman: itemAdjust.filter((obj) => obj.somatoria >= 23)
              .length,
            qtde_total_itens: data.reduce((total, item) => {
              return total + item.quantidade;
            }, 0),
            unidade: "PÇ",
          };

          Object.assign(itemsRM1.value[0], {
            reman:
              (
                (itemsRM1.value[0].qtde_itens_reman /
                  itemsRM1.value[0].qtde_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsRM1.value[0], {
            novos:
              (
                (1 -
                  itemsRM1.value[0].qtde_itens_reman /
                    itemsRM1.value[0].qtde_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP2 = (() => {
          itemsRM2.value[0] = {
            peso_itens_reman: itemAdjust.reduce((total, item) => {
              if (item.somatoria >= 23) {
                return total + item.peso_total_kg;
              }
              return total;
            }, 0),
            peso_total_itens: itemAdjust.reduce((total, item) => {
              return total + item.peso_total_kg;
            }, 0),
            unidade: "KG",
          };

          Object.assign(itemsRM2.value[0], {
            reman:
              (
                (itemsRM2.value[0].peso_itens_reman /
                  itemsRM2.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsRM2.value[0], {
            novos:
              (
                (1 -
                  itemsRM2.value[0].peso_itens_reman /
                    itemsRM2.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP3 = (() => {
          itemsRM3.value[0] = {
            custo_itens_reman: itemAdjust.reduce((total, item) => {
              if (item.somatoria >= 23) {
                return total + parseFloat(item.custo_total);
              }
              return total;
            }, 0),
            custo_total_itens: itemAdjust.reduce((total, item) => {
              return total + parseFloat(item.custo_total);
            }, 0),
            unidade: "$",
          };

          Object.assign(itemsRM3.value[0], {
            reman:
              (
                (itemsRM3.value[0].custo_itens_reman /
                  itemsRM3.value[0].custo_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsRM3.value[0], {
            novos:
              (
                (1 -
                  itemsRM3.value[0].custo_itens_reman /
                    itemsRM3.value[0].custo_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP4 = (() => {
          itemsRM4.value[0] = {
            renovável: itemAdjust
              .filter((i) => i.type_item === "Renovável")
              .reduce((total, item) => {
                return total + parseFloat(item.peso_total_kg);
              }, 0),
            peso_total_itens: itemsRM2.value[0].peso_total_itens,
            unidade: "KG",
          };

          Object.assign(itemsRM4.value[0], {
            indicador:
              (
                (itemsRM4.value[0].renovável /
                  itemsRM4.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP5 = (() => {
          itemsRM5.value[0] = {
            nao_renovavel: itemAdjust
              .filter((i) => i.type_item === "Não Renovável")
              .reduce((total, item) => {
                return total + parseFloat(item.peso_total_kg);
              }, 0),
            peso_total_itens: itemsRM2.value[0].peso_total_itens,
            unidade: "KG",
          };

          Object.assign(itemsRM5.value[0], {
            indicador:
              (
                (itemsRM5.value[0].nao_renovavel /
                  itemsRM5.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP6 = (() => {
          itemsRM6.value[0] = {
            reciclavel: itemAdjust
              .filter((i) => i.type_item === "Reciclável")
              .reduce((total, item) => {
                return total + parseFloat(item.peso_total_kg);
              }, 0),
            peso_total_itens: itemsRM2.value[0].peso_total_itens,
            unidade: "KG",
          };

          Object.assign(itemsRM6.value[0], {
            indicador:
              (
                (itemsRM6.value[0].reciclavel /
                  itemsRM6.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP7 = (() => {
          itemsRM7.value[0] = {
            qtde: itemsQtd.value[0].qtdUpCycling,
            total_itens: itemsRM1.value[0].qtde_total_itens,
            unidade: "PÇ",
          };

          Object.assign(itemsRM7.value[0], {
            upcycling:
              (
                (itemsRM7.value[0].qtde / itemsRM7.value[0].total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsRM7.value[0], {
            downcycling:
              (
                (1 - itemsRM7.value[0].qtde / itemsRM7.value[0].total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP8 = (() => {
          itemsRM8.value[0] = {
            peso: itemAdjust
              .filter((i) => i.up_cycling === "Sim")
              .reduce((total, item) => {
                return total + parseFloat(item.peso_total_kg);
              }, 0),
            peso_total_itens: itemsRM2.value[0].peso_total_itens,
            unidade: "KG",
          };

          Object.assign(itemsRM8.value[0], {
            upcycling:
              (
                (itemsRM8.value[0].peso / itemsRM8.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsRM8.value[0], {
            downcycling:
              (
                (1 -
                  itemsRM8.value[0].peso / itemsRM8.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();
      })

      .then(() => {
        // formatNumbers();

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
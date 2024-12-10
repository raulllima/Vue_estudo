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

      <!-- Table - IC-Rc1 -->
      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Peso', value: 'peso' },
          { text: 'Peso total de itens', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Reciclado', value: 'reciclado' },
          { text: 'Não Reciclado', value: 'nao_reciclado' },
        ]"
        :items="itemsRC1"
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

      <!-- Table - IC-Rc2 -->
      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Custo', value: 'custo' },
          { text: 'Custo total de itens', value: 'custo_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Reciclado', value: 'reciclado' },
          { text: 'Não Reciclado', value: 'nao_reciclado' },
        ]"
        :items="itemsRC2"
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

      <!-- Table - IC-Rc3 -->
      <EasyDataTable
        table-class-name="CustomTable SetupColor"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Renovável', value: 'renovavel' },
          { text: 'Peso Total de Itens', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Indicador', value: 'indicador' },
        ]"
        :items="itemsRC3"
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

      <!-- Table - IC-Rc4 -->
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
        :items="itemsRC4"
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

      <!-- Table - IC-Rc5 -->
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
        :items="itemsRC5"
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

      <!-- Table - IC-Rc6 -->
      <EasyDataTable
        table-class-name="CustomTable"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Peso', value: 'peso' },
          { text: 'Peso total de itens', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Upcycling', value: 'upcycling' },
          { text: 'Downcycling', value: 'downcycling' },
        ]"
        :items="itemsRC6"
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
const itemsRC1 = ref([]);
const itemsRC2 = ref([]);
const itemsRC3 = ref([]);
const itemsRC4 = ref([]);
const itemsRC5 = ref([]);
const itemsRC6 = ref([]);

const loading = ref(true);

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
            RE1: toRaw(itemsRC1.value[0]),
            RE2: toRaw(itemsRC2.value[0]),
            RE3: toRaw(itemsRC3.value[0]),
            RE4: toRaw(itemsRC4.value[0]),
            RE5: toRaw(itemsRC5.value[0]),
            RE6: toRaw(itemsRC6.value[0]),
          };
          to.meta.data = data;
        }
        next();
      });

      router.push({
        name: "C4-VerificarViabilidade",
      });
      store.dispatch("updateViewVerificarViabilidade", false);
    };

    const backPage = () => {
      router.go(-1);
    };

    return {
      loading,
      nextPage,
      backPage,
      itemsQtd,
      itemsRC1,
      itemsRC2,
      itemsRC3,
      itemsRC4,
      itemsRC5,
      itemsRC6,
    };
  },
  mounted() {
    api
      .get("/itens/C4/getAllItems")
      .then((response) => {
        if (response.data.length === 0) return {};
        loading.value = false;

        const data = response.data;
        const itemSelected = data.filter((i) => i.isAllowAnalysis === 1);

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
          itemsRC1.value[0] = {
            peso: itemSelected
              .reduce((total, item) => {
                return total + item.quantidade;
              }, 0)
              .toFixed(2),
            peso_total_itens: data.reduce((total, item) => {
              return total + item.quantidade;
            }, 0).toFixed(2),
            unidade: "KG",
          };

          Object.assign(itemsRC1.value[0], {
            reciclado:
              (
                (itemsRC1.value[0].peso / itemsRC1.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsRC1.value[0], {
            nao_reciclado:
              (
                (1 -
                  itemsRC1.value[0].peso / itemsRC1.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP2 = (() => {
          itemsRC2.value[0] = {
            custo: itemSelected
              .reduce((total, item) => {
                return total + item.custo;
              }, 0)
              .toFixed(2),
            custo_total_itens: data
              .reduce((total, item) => {
                return total + item.custo;
              }, 0)
              .toFixed(2),
            unidade: "$",
          };

          Object.assign(itemsRC2.value[0], {
            reciclado:
              (
                (itemsRC2.value[0].custo /
                  itemsRC2.value[0].custo_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsRC2.value[0], {
            nao_reciclado:
              (
                (1 -
                  itemsRC2.value[0].custo /
                    itemsRC2.value[0].custo_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP3 = (() => {
          itemsRC3.value[0] = {
            renovavel: itemSelected
              .filter((i) => i.type_item === "Renovável")
              .reduce((total, item) => {
                return total + item.quantidade;
              }, 0)
              .toFixed(2),
            peso_total_itens: itemsRC1.value[0].peso_total_itens,
            unidade: "KG",
          };

          Object.assign(itemsRC3.value[0], {
            indicador:
              (
                (itemsRC3.value[0].renovavel /
                  itemsRC3.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP4 = (() => {
          itemsRC4.value[0] = {
            nao_renovavel: itemSelected
              .filter((i) => i.type_item === "Não Renovável")
              .reduce((total, item) => {
                return total + item.quantidade;
              }, 0)
              .toFixed(2),
            peso_total_itens: itemsRC1.value[0].peso_total_itens,
            unidade: "KG",
          };

          Object.assign(itemsRC4.value[0], {
            indicador:
              (
                (itemsRC4.value[0].nao_renovavel /
                  itemsRC4.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP5 = (() => {
          itemsRC5.value[0] = {
            reciclavel: itemSelected
              .filter((i) => i.type_item === "Reciclável")
              .reduce((total, item) => {
                return total + item.quantidade;
              }, 0)
              .toFixed(2),
            peso_total_itens: itemsRC1.value[0].peso_total_itens,
            unidade: "KG",
          };

          Object.assign(itemsRC5.value[0], {
            indicador:
              (
                (itemsRC5.value[0].reciclavel /
                  itemsRC5.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP6 = (() => {
          itemsRC6.value[0] = {
            peso: data
              .filter((i) => i.up_cycling === "Sim")
              .reduce((total, item) => {
                return total + item.quantidade;
              }, 0)
              .toFixed(2),
            peso_total_itens: itemsRC1.value[0].peso_total_itens,
            unidade: "KG",
          };

          Object.assign(itemsRC6.value[0], {
            upcycling:
              (
                (itemsRC6.value[0].peso / itemsRC6.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsRC6.value[0], {
            downcycling:
              (
                (1 -
                  itemsRC6.value[0].peso / itemsRC6.value[0].peso_total_itens) *
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
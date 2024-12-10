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
          { text: 'Qtde', value: 'quantidade' },
          { text: 'Demanda Mensal', value: 'demanda_mensal' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Compartilhada', value: 'compartilhada' },
          { text: 'Não Compartilhada', value: 'nao_compartilhada' },
        ]"
        :items="itemsCP1"
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
          { text: 'Peso', value: 'peso' },
          { text: 'Peso Total de Itens', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Compartilhada', value: 'compartilhada' },
          { text: 'Não Compartilhada', value: 'nao_compartilhada' },
        ]"
        :items="itemsCP2"
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
          { text: 'Custo', value: 'custo' },
          { text: 'Custo Total', value: 'custo_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Compartilhada', value: 'compartilhada' },
          { text: 'Não Compartilhada', value: 'nao_compartilhada' },
        ]"
        :items="itemsCP3"
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
          { text: 'Renovável', value: 'name' },
          { text: 'Peso Total', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Indicador', value: 'indicador' },
        ]"
        :items="itemsCP4"
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
          { text: 'Não Renovável', value: 'name' },
          { text: 'Peso Total', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Indicador', value: 'indicador' },
        ]"
        :items="itemsCP5"
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

      <!-- Table - IC-CP6 -->
      <EasyDataTable
        table-class-name="CustomTable SetupColor"
        header-text-direction="center"
        body-text-direction="center"
        hide-footer
        :loading="loading"
        :headers="[
          { text: 'Reciclável', value: 'name' },
          { text: 'Peso Total', value: 'peso_total_itens' },
          { text: 'Unidade', value: 'unidade' },
          { text: 'Indicador', value: 'indicador' },
        ]"
        :items="itemsCP6"
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

      <!-- Table - IC-CP7 -->
      <EasyDataTable
        table-class-name="CustomTable"
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
        :items="itemsCP7"
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

      <!-- Table - IC-CP8 -->
      <EasyDataTable
        table-class-name="CustomTable"
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
        :items="itemsCP8"
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
const itemsCP1 = ref([]);
const itemsCP2 = ref([]);
const itemsCP3 = ref([]);
const itemsCP4 = ref([]);
const itemsCP5 = ref([]);
const itemsCP6 = ref([]);
const itemsCP7 = ref([]);
const itemsCP8 = ref([]);

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
            CP1: toRaw(itemsCP1.value[0]),
            CP2: toRaw(itemsCP2.value[0]),
            CP3: toRaw(itemsCP3.value[0]),
            CP4: toRaw(itemsCP4.value[0]),
            CP5: toRaw(itemsCP5.value[0]),
            CP6: toRaw(itemsCP6.value[0]),
            CP7: toRaw(itemsCP7.value[0]),
            CP8: toRaw(itemsCP8.value[0]),
          };
          to.meta.data = data;
        }
        next();
      });

      router.push({
        name: "C1-VerificarViabilidade",
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
      itemsCP1,
      itemsCP2,
      itemsCP3,
      itemsCP4,
      itemsCP5,
      itemsCP6,
      itemsCP7,
      itemsCP8,
    };
  },
  mounted() {
    api
      .get("/itens/C1/getAllItems")
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
          itemsCP1.value[0] = {
            quantidade: data.reduce((total, item) => {
              return total + parseInt(item.quantidade);
            }, 0),

            demanda_mensal: data.reduce((total, item) => {
              return total + parseInt(item.demanda_mensal);
            }, 0),
            unidade: "PÇ",
          };

          Object.assign(itemsCP1.value[0], {
            compartilhada:
              (
                (itemsCP1.value[0].quantidade /
                  itemsCP1.value[0].demanda_mensal) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsCP1.value[0], {
            nao_compartilhada:
              (
                (1 -
                  itemsCP1.value[0].quantidade /
                    itemsCP1.value[0].demanda_mensal) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP2 = (() => {
          itemsCP2.value[0] = {
            peso: data.reduce((total, item) => {
              return (
                total + item.peso_unit_kg * parseInt(item.qtd_compartilhada)
              );
            }, 0),
            peso_total_itens: data.reduce((total, item) => {
              return (
                total +
                (item.peso_unit_kg * parseInt(item.qtd_compartilhada) +
                  item.peso_unit_kg * parseInt(item.qtd_naoCompartilhada))
              );
            }, 0),
            unidade: "KG",
          };

          Object.assign(itemsCP2.value[0], {
            compartilhada:
              (
                (itemsCP2.value[0].peso / itemsCP2.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsCP2.value[0], {
            nao_compartilhada:
              (
                (1 -
                  itemsCP2.value[0].peso / itemsCP2.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP3 = (() => {
          itemsCP3.value[0] = {
            custo: data.reduce((total, item) => {
              return (
                total +
                parseFloat(item.custo_unit) * parseInt(item.qtd_compartilhada)
              );
            }, 0),

            custo_total_itens: data.reduce((total, item) => {
              return (
                total +
                parseFloat(item.custo_unit) * parseInt(item.qtd_compartilhada) +
                parseFloat(item.custo_unit) *
                  parseInt(item.qtd_naoCompartilhada)
              );
            }, 0),

            unidade: "$",
          };

          Object.assign(itemsCP3.value[0], {
            compartilhada:
              (
                (itemsCP3.value[0].custo /
                  itemsCP3.value[0].custo_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsCP3.value[0], {
            nao_compartilhada:
              (
                (1 -
                  itemsCP3.value[0].custo /
                    itemsCP3.value[0].custo_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP4 = (() => {
          if (data.filter((i) => i.type_item === "Renovável").length === 0)
            return {};

          itemsCP4.value[0] = {
            name:
              data.filter((i) => i.type_item === "Renovável").length *
              data
                .filter((i) => i.type_item === "Renovável")
                .reduce((total, item) => {
                  return (
                    total + item.peso_unit_kg * parseInt(item.qtd_compartilhada)
                  );
                }, 0),
            peso_total_itens: data
              .filter((i) => i.type_item === "Renovável")
              .reduce((total, item) => {
                return (
                  total +
                  (item.peso_unit_kg * parseInt(item.qtd_compartilhada) +
                    item.peso_unit_kg * parseInt(item.qtd_naoCompartilhada))
                );
              }, 0),
            unidade: "KG",
          };

          Object.assign(itemsCP4.value[0], {
            indicador:
              (
                (itemsCP4.value[0].name / itemsCP4.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP5 = (() => {
          if (data.filter((i) => i.type_item === "Não Renovável").length === 0)
            return {};

          itemsCP5.value[0] = {
            name:
              data.filter((i) => i.type_item === "Não Renovável").length *
              data
                .filter((i) => i.type_item === "Não Renovável")
                .reduce((total, item) => {
                  return (
                    total + item.peso_unit_kg * parseInt(item.qtd_compartilhada)
                  );
                }, 0),
            peso_total_itens: data
              .filter((i) => i.type_item === "Não Renovável")
              .reduce((total, item) => {
                return (
                  total +
                  (item.peso_unit_kg * parseInt(item.qtd_compartilhada) +
                    item.peso_unit_kg * parseInt(item.qtd_naoCompartilhada))
                );
              }, 0),
            unidade: "KG",
          };

          Object.assign(itemsCP5.value[0], {
            indicador:
              (
                (itemsCP5.value[0].name / itemsCP5.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP6 = (() => {
          if (data.filter((i) => i.type_item === "Reciclável").length === 0)
            return {};

          itemsCP6.value[0] = {
            name:
              data.filter((i) => i.type_item === "Reciclável").length *
              data
                .filter((i) => i.type_item === "Reciclável")
                .reduce((total, item) => {
                  return (
                    total + item.peso_unit_kg * parseInt(item.qtd_compartilhada)
                  );
                }, 0),
            peso_total_itens: data
              .filter((i) => i.type_item === "Reciclável")
              .reduce((total, item) => {
                return (
                  total +
                  (item.peso_unit_kg * parseInt(item.qtd_compartilhada) +
                    item.peso_unit_kg * parseInt(item.qtd_naoCompartilhada))
                );
              }, 0),
            unidade: "KG",
          };
          Object.assign(itemsCP6.value[0], {
            indicador:
              (
                (itemsCP6.value[0].name / itemsCP6.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP7 = (() => {
          itemsCP7.value[0] = {
            quantidade:
              itemsCP1.value[0].quantidade * itemsQtd.value[0].qtdUpCycling,
            total_itens: itemsCP1.value[0].demanda_mensal,
            unidade: "PÇ",
          };

          Object.assign(itemsCP7.value[0], {
            upcycling:
              (
                (itemsCP7.value[0].quantidade / itemsCP7.value[0].total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsCP7.value[0], {
            downcycling:
              (
                (1 -
                  itemsCP7.value[0].quantidade /
                    itemsCP7.value[0].total_itens) *
                100
              ).toFixed(1) + " %",
          });
        })();

        const setupItemsCP8 = (() => {
          // { text: 'Peso', value: 'peso' },
          // { text: 'Peso Total de Itens', value: 'peso_total_itens' },
          // { text: 'Unidade', value: 'unidade' },
          // { text: 'UPCYCLING', value: 'upcycling' },
          // { text: 'DOWNCYCLING', value: 'downcycling' },

          itemsCP8.value[0] = {
            peso: itemsCP2.value[0].peso * itemsQtd.value[0].qtdUpCycling,
            peso_total_itens: itemsCP2.value[0].peso_total_itens,
            unidade: "KG",
          };

          Object.assign(itemsCP8.value[0], {
            upcycling:
              (
                (itemsCP8.value[0].peso / itemsCP8.value[0].peso_total_itens) *
                100
              ).toFixed(1) + " %",
          });

          Object.assign(itemsCP8.value[0], {
            downcycling:
              (
                (1 -
                  itemsCP8.value[0].peso / itemsCP8.value[0].peso_total_itens) *
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
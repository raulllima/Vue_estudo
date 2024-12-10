<template>
  <div>
    <div class="demo-page">
      <main class="demo-page-content">
        <section>
          <h1>Projeto</h1>
          <p>{{ nomeProjeto.name }}</p>
        </section>
        <section>
          <h1>Investimento</h1>
          <p>R$ {{ Investimentos }}</p>
        </section>
        <section>
          <h1>Ciclo</h1>
          <p>Manter/Prolongar</p>
        </section>
        <section>
          <h1>Custo</h1>
          <p>R$ {{ Custos }}</p>
        </section>
        <section>
          <h1>TMA</h1>
          <p>{{ TMA }} %</p>
        </section>
      </main>
    </div>
    <div class="demo-page">
      <main class="demo-page-content">
        <div class="container">
          <div class="box">
            <h2>Indicadores Circulares</h2>
            <div class="indicators">
              <div class="indicator">
                <span>IC-Cp1</span>
                <span>
                  {{ CP1.compartilhada ? CP1.compartilhada : "0 %" }}</span
                >
                <span>Qtde itens COMPARTILHADOS</span>
                <span class="status red"></span>
              </div>
              <div class="indicator">
                <span>IC-Cp2</span>
                <span>{{ CP2.compartilhada ? CP2.compartilhada : "0 %" }}</span>
                <span>Peso itens COMPARTILHADOS</span>
                <span class="status red"></span>
              </div>
              <div class="indicator">
                <span>IC-Cp3</span>
                <span>{{ CP3.compartilhada ? CP3.compartilhada : "0 %" }}</span>
                <span>Custo itens COMPARTILHADOS</span>
                <span class="status red"></span>
              </div>
              <div class="indicator">
                <span>IC-Cp4</span>
                <span>{{ CP4.indicador ? CP4.indicador : "0 %" }}</span>
                <span>Peso material RENOVÁVEL reman</span>
                <span class="status red"></span>
              </div>
              <div class="indicator">
                <span>IC-Cp5</span>
                <span> {{ CP5.indicador ? CP5.indicador : "0 %" }}</span>
                <span>Peso material NÃO RENOVÁVEL reman</span>
                <span class="status green"></span>
              </div>
              <div class="indicator">
                <span>IC-Cp6</span>
                <span> {{ CP6.indicador ? CP6.indicador : "0 %" }}</span>
                <span>Peso material RECICLÁVEL reman</span>
                <span class="status red"></span>
              </div>
              <div class="indicator">
                <span>IC-Cp7</span>
                <span>{{ CP7.upcycling ? CP7.upcycling : "0 %" }}</span>
                <span>Qtde itens UPCYCLING</span>
                <span class="status yellow"></span>
              </div>
              <div class="indicator">
                <span>IC-Cp8</span>
                <span>{{ CP8.upcycling ? CP8.upcycling : "0 %" }}</span>
                <span>Peso itens UPCYCLING</span>
                <span class="status red"></span>
              </div>
            </div>
          </div>

          <div class="box">
            <h2>Indicadores Financeiros</h2>
            <div class="box-financial">
              <div class="financial-indicator">
                <span>VPL</span>
                <span> {{ VPL }}</span>
                <span class="status green"></span>
              </div>
              <div class="financial-indicator">
                <span>TIR</span>
                <span> {{ TIR ? TIR + " %" : "" }} </span>
                <span class="status green"></span>
              </div>
              <div class="financial-indicator">
                <span>Payback Simples</span>
                <span> {{ PaybackSimples }}</span>
                <span class="status green"></span>
              </div>
              <div class="financial-indicator">
                <span>Payback Descontado</span>
                <span> {{ PaybackDescontado }}</span>
                <span class="status green"></span>
              </div>

              <div class="graph">
                <apexchart
                style="width: 20vw;"
                  type="donut"
                  :options="chartOptions"
                  :series="series"
                />
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
  
<script>
import { ref, watch, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import VueApexCharts from "vue3-apexcharts";

let Investimentos = "";
let Custos = "";
let TMA = "";
let VPL = "";
let TIR = "";
let PaybackSimples = "";
let PaybackDescontado = "";
let CP1 = {};
let CP2 = {};
let CP3 = {};
let CP4 = {};
let CP5 = {};
let CP6 = {};
let CP7 = {};
let CP8 = {};


export default {
  name: "Resultado",
  setup() {
    const route = useRoute();
    const store = useStore();
    const nomeProjeto = ref(store.state.activeProject);

    if (route.meta.data) {
      const {
        Investimentos: inv,
        Custos: cust,
        TMA: tma,
        VPL: vpl,
        TIR: tir,
        PaybackSimples: paySimple,
        PaybackDescontado: payDiscount,
        Indices: {
          CP1: cp1 = {},
          CP2: cp2 = {},
          CP3: cp3 = {},
          CP4: cp4 = {},
          CP5: cp5 = {},
          CP6: cp6 = {},
          CP7: cp7 = {},
          CP8: cp8 = {},
        } = {},
      } = route.meta.data;

      Investimentos = inv;
      Custos = cust;
      TMA = tma;
      VPL = vpl;
      TIR = tir;
      PaybackSimples = paySimple;
      PaybackDescontado = payDiscount;
      CP1 = cp1;
      CP2 = cp2;
      CP3 = cp3;
      CP4 = cp4;
      CP5 = cp5;
      CP6 = cp6;
      CP7 = cp7;
      CP8 = cp8;
    }

    const series = [60, 20, 20];

    const chartOptions = {
      chart: {
        type: "donut",
      },
      labels: ["", "", ""], // Rótulos
      plotOptions: {
        pie: {
          startAngle: -90, // Ângulo inicial
          endAngle: 90, // Ângulo final
          offsetY: 10, // Ajuste vertical
          expandOnClick: true, // Expande a fatia ao clicar
        },
      },
      colors: ["#FF4560", "#008FFB", "#FEB019"], // Cores personalizadas
      dataLabels: {
        enabled: true, // Mostrar porcentagens
      },
      legend: {
        // position: "bottom",
        show: false
      },
      title: {
        text: "Viabilidade", // Título
        align: "center",
      },
    };

    return {
      series,
      chartOptions,
      nomeProjeto,
      Investimentos,
      Custos,
      TMA,
      VPL,
      TIR,
      PaybackSimples,
      PaybackDescontado,
      CP1,
      CP2,
      CP3,
      CP4,
      CP5,
      CP6,
      CP7,
      CP8,
    };
  },

  mounted() {
    // Indicadores Circulares
    const indicadoresCircularesName = document.querySelectorAll(
      ".indicator span:nth-child(1)"
    );
    const indicadoresCircularesValue = document.querySelectorAll(
      ".indicator span:nth-child(2)"
    );
    const indicadoresCircularesColor = document.querySelectorAll(
      ".indicator span:nth-child(4)"
    );

    for (let i = 0; i < indicadoresCircularesName.length; i++) {
      if (indicadoresCircularesName[i].innerHTML === "IC-Cp1") {
        if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 50) {
          indicadoresCircularesColor[i].className = "status green";
        } else if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 5) {
          indicadoresCircularesColor[i].className = "status yellow";
        } else {
          indicadoresCircularesColor[i].className = "status red";
        }
      } else if (indicadoresCircularesName[i].innerHTML === "IC-Cp2") {
        if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 50) {
          indicadoresCircularesColor[i].className = "status green";
        } else if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 20) {
          indicadoresCircularesColor[i].className = "status yellow";
        } else {
          indicadoresCircularesColor[i].className = "status red";
        }
      } else if (indicadoresCircularesName[i].innerHTML === "IC-Cp3") {
        if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 20) {
          indicadoresCircularesColor[i].className = "status green";
        } else if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 5) {
          indicadoresCircularesColor[i].className = "status yellow";
        } else {
          indicadoresCircularesColor[i].className = "status red";
        }
      } else if (indicadoresCircularesName[i].innerHTML === "IC-Cp4") {
        if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 20) {
          indicadoresCircularesColor[i].className = "status green";
        } else if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 10) {
          indicadoresCircularesColor[i].className = "status yellow";
        } else {
          indicadoresCircularesColor[i].className = "status red";
        }
      } else if (indicadoresCircularesName[i].innerHTML === "IC-Cp5") {
        if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 20) {
          indicadoresCircularesColor[i].className = "status red";
        } else if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 10) {
          indicadoresCircularesColor[i].className = "status yellow";
        } else {
          indicadoresCircularesColor[i].className = "status green";
        }
      } else if (indicadoresCircularesName[i].innerHTML === "IC-Cp6") {
        if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 20) {
          indicadoresCircularesColor[i].className = "status green";
        } else if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 10) {
          indicadoresCircularesColor[i].className = "status yellow";
        } else {
          indicadoresCircularesColor[i].className = "status red";
        }
      } else if (indicadoresCircularesName[i].innerHTML === "IC-Cp7") {
        if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 50) {
          indicadoresCircularesColor[i].className = "status green";
        } else if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 5) {
          indicadoresCircularesColor[i].className = "status yellow";
        } else {
          indicadoresCircularesColor[i].className = "status red";
        }
      } else if (indicadoresCircularesName[i].innerHTML === "IC-Cp8") {
        if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 50) {
          indicadoresCircularesColor[i].className = "status green";
        } else if (parseFloat(indicadoresCircularesValue[i].innerHTML) >= 20) {
          indicadoresCircularesColor[i].className = "status yellow";
        } else {
          indicadoresCircularesColor[i].className = "status red";
        }
      }
    }

    // Indicadores Financeiros
    const indicadoresFinanceirosName = document.querySelectorAll(
      ".financial-indicator span:nth-child(1)"
    );
    const indicadoresFinanceirosValue = document.querySelectorAll(
      ".financial-indicator span:nth-child(2)"
    );
    const indicadoresFinanceirosColor = document.querySelectorAll(
      ".financial-indicator span:nth-child(3)"
    );

    for (let i = 0; i < indicadoresFinanceirosName.length; i++) {
      if (indicadoresFinanceirosName[i].innerHTML === "VPL") {
        if (parseFloat(indicadoresFinanceirosValue[i].innerHTML) > 0) {
          indicadoresFinanceirosColor[i].className = "status green";
        } else if (parseFloat(indicadoresFinanceirosValue[i].innerHTML <= 0)) {
          indicadoresFinanceirosColor[i].className = "status yellow";
        } else {
          indicadoresFinanceirosColor[i].className = "status red";
        }
      } else if (indicadoresFinanceirosName[i].innerHTML === "TIR") {
        if (parseFloat(indicadoresFinanceirosValue[i].innerHTML) >= TMA) {
          indicadoresFinanceirosColor[i].className = "status green";
        } else {
          indicadoresFinanceirosColor[i].className = "status red";
        }
      } else if (
        indicadoresFinanceirosName[i].innerHTML === "Payback Simples" &&
        indicadoresFinanceirosName[i].innerHTML === "Payback Descontado"
      ) {
        if (parseFloat(indicadoresFinanceirosValue[i].innerHTML) >= 12) {
          indicadoresFinanceirosColor[i].className = "status red";
        } else if (parseFloat(indicadoresFinanceirosValue[i].innerHTML >= 6)) {
          indicadoresFinanceirosColor[i].className = "status yellow";
        } else {
          indicadoresFinanceirosColor[i].className = "status green";
        }
      }
    }
  },
};
</script>

<style scoped>
/* .indicator span:nth-child(2) {
    color: red
} */

.demo-page {
  max-width: 100%;
  width: 100%;
  justify-content: center;
}

main {
  display: flex;
  flex-direction: row;
  width: 100%;
  bottom: 0;
  left: 0;
  justify-content: space-between;
}
section {
  min-width: 200px;
}

.container {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
}

.box {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.box h2 {
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
}

.indicators {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.indicator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 7.5px -1.5px rgba(0, 0, 0, 0.1),
    0 2px 3px 1px rgba(0, 0, 0, 0.05);
  height: 50px;
  width: 100%;
}

.indicator span {
  flex: 1;
  font-size: 14px;
  word-break: break-word;
  margin: 20px;
  max-width: 150px;
}

.indicator .status {
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
}

.status {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.status.red {
  background-color: rgb(216, 99, 68);
  border: solid 1px rgb(181, 82, 56);
}

.status.yellow {
  background-color: rgb(234, 194, 130);
  border: solid 1px rgb(205, 169, 98);
}

.status.green {
  background-color: rgb(118, 167, 151);
  border: solid 1px rgb(73, 127, 109);
}

.box-financial {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 10px;
}

.graph {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.financial-indicator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 7.5px -1.5px rgba(0, 0, 0, 0.1),
    0 2px 3px 1px rgba(0, 0, 0, 0.05);
  height: 50px;
  width: 100%;
}

.financial-indicator span {
  flex: 1;
  font-size: 14px;
  word-break: break-word;
  margin: 20px;
  max-width: 100px;
}

.financial-indicator .status {
  flex: 0 0 20px;
  height: 20px;
  width: 20px;
  border-radius: 20px;
}
</style>
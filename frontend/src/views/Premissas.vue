<template>
 <div class="demo-page">
    <div class="demo-page-navigation">
      <nav>
        <ul>   
          <li>
            <a href="#gerais">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-justify">
                <line x1="21" y1="10" x2="3" y2="10" />
                <line x1="21" y1="6" x2="3" y2="6" />
                <line x1="21" y1="14" x2="3" y2="14" />
                <line x1="21" y1="18" x2="3" y2="18" />
              </svg>
              Premissas Gerais</a>
          </li>
          <li>
            <a href="#especificas">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                </svg>
                Premissas Específicas</a>
          </li>
        </ul>
      </nav>
    </div>
    <main class="demo-page-content">
      <section>
        <div class="href-target" id="gerais"></div>
        <h1 class="package-name">Premissas Gerais</h1>
       
        <p>
         Para uso do programa, alguns termos precisam ser entendido pela empresa.
        </p>
        <strong>Termos:</strong>
        <ul>
          <li>
            O processo relativo ao ciclo técnico em estudo será conforme <strong>know how</strong> da
        empresa para realizar esta operação.
          </li>
          <li>Os custo e recursos necessários para cálculo da viabilidade serão
        conforme premissa 1.</li>
          <li> A empresa pode criar um novo modelo de negócio para atender a
        necessidade do ciclo técnico desejado ou nomear a "parcerias" para
        realizar a operação.</li>
          <li>Os custo e recursos necessários para cálculo da viabilidade serão com
        base na premissa 1.</li>
          <li>
            Perfect for rapid prototyping or tweak it and make it your own.
          </li>
          <li>Não será considerado no cálculo da viabilidade ganhos oriuntos da
        melhora da imagem da empresa (benefícios de marketing e relações
        públicas).</li>
        </ul>
      </section>

      <section>
        <div class="href-target" id="especificas"></div>
        <h1 class="package-name">Premissas Específicas</h1>
       
        <p>
          (CICLO REMANUFATURA) 
        </p>
        <strong>Termos:</strong>
        <ul>
          <li>
            A capacidade fabril nas linhas de produção atuais podem absorver a
        demanda de produtos remanufaturados.
          </li>
          <li>Não será considerado investimento e ou custos para a operação de
        remanufatura devido à premissa 1.</li>
          <li> Caso a premissa 1 não atenda, será necessário verificar investimento
        para atender esta necessidade (INVESTIMENTOS + CUSTOS).</li>
        <li>
        Não será considerado possíveis receitas e custos com o descarte dos
        componentes que não serão reutilizados no processo de remanufatura.
      </li>
      <li>
        A viabilidade é em função da redução em compra de componentes que serão
        reutilizados na remanufatura.
      </li>
      <li>
        Presume-se que alguns componentes possam ser remanufaturados várias
        vezes, no entanto neste estudo será considerado que sejam
        remanufaturados apenas uma vez.
      </li>
      <li>
        Redução de custos por conta do transporte (por exemplo: queima de
        combustivel, manutenção do veículo, pneus, etc) não será considerado na
        avaliação da viabilidade.
      </li>
        </ul>
      </section>
      <!-- <footer>Made with ♥ for CSS</footer> -->
    </main>
  </div>
  
  <!-- <script src="https://gist.github.com/nielsVoogt/e25c9c8f2b8456bbd1239b775d21333f.js"></script>
  <script src="https://gist.github.com/nielsVoogt/e513d0df728dfc3fb1f5f9ecae042bf8.js"></script>
  <script src="https://gist.github.com/nielsVoogt/75ebf8c12ca420eb2089312a931ab4cf.js"></script>
  <script src="https://gist.github.com/nielsVoogt/2ae279af287e520f545285b0d7c45828.js"></script>
  <script src="https://gist.github.com/nielsVoogt/f0480b1a2d0deda02138d61ec5c9f4d0.js"></script>
  <script src="https://gist.github.com/nielsVoogt/63daf967a17776d00f5923048cf28daf.js"></script>
  <script src="https://gist.github.com/nielsVoogt/8cc4cd8ebc6e81c3f889f1b40037b0cc.js"></script>
  <script src="https://gist.github.com/nielsVoogt/5c490e16bc1b63bba29d4ee76477f94d.js"></script>
  <script src="https://gist.github.com/nielsVoogt/a00c2c8b6b7acfacce6d50926379e722.js"></script> -->

  <!-- <input-default input-type="radio"> </input-default> -->
    <ol>
    <h2>  </h2> <h4> </h4>

      <li>
       
      </li>
      <li>
        
      </li>
      <li>
        
      </li>
      
    </ol>
</template>


<script>
import InputDefault from "../components/Input/InputRadio.vue";

export default {
  components: {
    InputDefault,
  },
};
</script>

<style scoped>

.contentPremissa {
  display: flex;
  justify-content: space-around;
  /* border: 0.5px solid black; */
}

.contentPremissa ol {
  padding: 25px;
  width: 60%
}

.contentPremissa ol > li {
  text-align: left;
  margin-top: 10px;
}



</style>
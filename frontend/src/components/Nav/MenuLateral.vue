<template>
  <div class="navbar">
    <ul>
      <li>
        <router-link to="/"> Inicio </router-link>
      </li>
      <li>
        <router-link to="/premissas"> Premissas </router-link>
      </li>
      <li v-if="activeUser">
        <router-link to="/definir"> Definir Fluxo </router-link>
      </li>
      <li v-if="activeUser">
        <router-link
          :to="`${currentCycle}-coletarDados`"
          :class="{ link_disabled: isViewColetarDadosDisabled }"
        >
          Coletar Dados
        </router-link>
      </li>
      <li v-if="activeUser">
        <router-link
          :to="`${currentCycle}-analisarValidar`"
          :class="{ link_disabled: isViewAnalisarValidarDisabled }"
        >
          Analisar e Validar
        </router-link>
      </li>
      <li v-if="activeUser">
        <router-link
          :to="`${currentCycle}-verificarViabilidade`"
          :class="{ link_disabled: isViewVerificarViabilidadeDisabled }"
        >
          Verificar Viabilidade
        </router-link>
      </li>
      <li v-if="activeUser">
        <router-link
          :to="`${currentCycle}-implantarRedesenhar`"
          :class="{ link_disabled: isViewImplantarRedesenharDisabled }"
        >
          Implantar / Redesenhar
        </router-link>
      </li>
    </ul>

    <div v-if="activeUser" class="footerbar" @click="toPageMeusProjetos">
      <button class="button" style="--clr: #01700c93">
        <span class="button__icon-wrapper">
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="button__icon-svg"
            width="10"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            ></path>
          </svg>

          <svg
            viewBox="0 0 14 15"
            fill="none"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
            class="button__icon-svg button__icon-svg--copy"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        Meus Projetos
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "MenuLateral",

  setup() {
    const router = useRouter();
    const store = useStore();

    const toPageMeusProjetos = () => {
      router.push({
        name: "meus_projetos"
      })
    }

    const activeUser = computed(() => store.state.activeUser);
    const currentCycle = computed(() => store.state.cycle);
    const isViewColetarDadosDisabled = computed(
      () => store.state.viewColetarDados
    );
    const isViewAnalisarValidarDisabled = computed(
      () => store.state.viewAnalisarValidar
    );
    const isViewVerificarViabilidadeDisabled = computed(
      () => store.state.viewVerificarViabilidade
    );
    const isViewImplantarRedesenharDisabled = computed(
      () => store.state.viewImplantarRedesenhar
    );

    return {
      toPageMeusProjetos,
      activeUser,
      currentCycle,
      isViewColetarDadosDisabled,
      isViewAnalisarValidarDisabled,
      isViewVerificarViabilidadeDisabled,
      isViewImplantarRedesenharDisabled,
    };
  },
};
</script>

<style scoped>
.link_disabled {
  pointer-events: none;
  opacity: 0.5;
}

.footerbar {
  margin-top: auto;
  margin-bottom: 25%;
}

.navbar {
  display: flex;
  flex-direction: column;
  width: 12%;
  min-width: 200px;
  max-width: 250px;
  background-color: white;

  position: absolute;
  overflow: visible;
  height: 100vh;
  position: sticky;
  top: 0;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
}

.navbar ul li {
  margin-top: 5%;
}

.navbar ul li a {
  display: block;
  text-align: center;
  padding: 5%;
  color: black;
  text-decoration: none;
}

.navbar ul li a:hover {
  background-color: #01700c59;
}

.router-link-active {
  background-color: #01700c93;
}

/* From Uiverse.io by Creatlydev */
.button {
  line-height: 1;
  text-decoration: none;
  display: inline-flex;
  border: none;
  cursor: pointer;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--clr);
  color: #fff;
  border-radius: 10rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.3s;
}

.button__icon-wrapper {
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  position: relative;
  color: var(--clr);
  background-color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.button:hover {
  background-color: #01700c59;
}

.button:hover .button__icon-wrapper {
  color: #01700c59;
}

.button__icon-svg--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.button:hover .button__icon-svg:first-child {
  transition: transform 0.3s ease-in-out;
  transform: translate(150%, -150%);
}

.button:hover .button__icon-svg--copy {
  transition: transform 0.3s ease-in-out 0.1s;
  transform: translate(0);
}
</style>
<template>

    <MenuLateral></MenuLateral>
    <div class="contentWeb">
      <router-view></router-view>
    </div>

</template>

<script>
import MenuLateral from "./components/Nav/MenuLateral.vue";
import { useNotification } from "@kyvg/vue3-notification";

export default {
  components: {
    MenuLateral,
  },
  data() {
    return {};
  },
};
</script>

<style>
@font-face {
  font-family: "AvenirLocal";
  src: url("./assets/font/Avenir.otf");
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, AvenirLocal, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
}

.main {
  display: flex;
  width: 100vw;
}

.contentWeb {
  padding-left: 1%;
  grid-area: content;
  background: rgb(199, 255, 199);
  width: 100%;
  
  /* Resolve o bug da tela - Investimento */
  
  /* display: flex;
  justify-content: center; */
}
</style>

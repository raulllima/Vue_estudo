<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="login-container">
        <h2>Ferramenta de Transição Circular</h2>
        <img class="home" src="..\assets\images\home.png" />

        <div v-if="!userLogged">
          <div class="input-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <input
              @keydown.enter="effectLogon"
              v-model="inputLogin"
              type="email"
              placeholder="Login"
              required
            />
          </div>
          <div class="input-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              @keydown.enter="effectLogon"
              v-model="inputPassword"
              type="password"
              id="password"
              placeholder="Senha"
              required
            />
            <div class="password-toggle">
              <svg
                id="eye-open"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 password-eye"
                style="display: none"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <svg
                id="eye-closed"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 password-eye"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </div>
          </div>
          <div class="login-btn" @click="effectLogon">
            <span v-if="!logonLoading"> Entrar </span>
            <img v-else src="../assets/images/loading.svg" alt="" />
          </div>
          <div class="options">
            <a href="#">Cadastre-se</a>
            <a href="#">Esqueci minha senha</a>
          </div>
        </div>
        <div v-else class="logout-btn" @click="effectLogout">
          <span> Sair </span>
          <img src="../assets/images/exit.svg" alt="" />
        </div>
      </div>
    </div>
    <Notifications />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import api from "@/api/api";
import { ref, watch } from "vue";

import { useNotification } from "@kyvg/vue3-notification";
import { Notifications } from "@kyvg/vue3-notification";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const { notify } = useNotification();

    const inputLogin = ref("");
    const inputPassword = ref("");
    const logonLoading = ref(false);
    const userLogged = ref(store.state.activeUser ? true : false);

    const effectLogon = () => {
      logonLoading.value = true;

      if (!inputLogin.value && !inputPassword.value) {
        notify({
          title: "Notificação",
          text: "O campo de login e/ou senha não pode estar vazio!",
          type: "error", // Tipos possíveis: 'success', 'error', 'warning', etc.
          duration: 3000,
          pauseOnHover: true,
          closeOnClick: true,
        });
        logonLoading.value = false;
        return;
      }

      api
        .post("/usuarios/logon", {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            username: inputLogin.value,
            password: inputPassword.value,
          },
        })
        .then((response) => {
          logonLoading.value = false;

          store.dispatch("updateActiveUser", response.data.username);

          notify({
            title: "Notificação",
            text: `Bem-vindo(a) ${response.data.username}!`,
            type: "success", // Tipos possíveis: 'success', 'error', 'warning', etc.
            duration: 3000,
            pauseOnHover: true,
            closeOnClick: true,
          });

          userLogged.value = true;

          setTimeout(() => {
            router.push({ name: "meus_projetos" });
          }, 2000);
        })
        .catch((error) => {
          if (error.response) {
            logonLoading.value = false;
            const { data: errorData } = error.response;

            if (errorData.code === 404) {
              notify({
                title: "Notificação",
                text: errorData.msg,
                type: "error", // Tipos possíveis: 'success', 'error', 'warning', etc.
                duration: 3000,
                pauseOnHover: true,
                closeOnClick: true,
              });
            }
          } else {
            console.log("Erro sem resposta do servidor");
          }
        });
    };

    const effectLogout = () => {
      userLogged.value = false;

      store.dispatch("updateActiveUser", null);
    };

    return {
      Notifications,
      inputLogin,
      inputPassword,
      logonLoading,
      userLogged,
      effectLogon,
      effectLogout,
    };
  },

  mounted() {
    if (!this.userLogged) {
      const seePassword = document.querySelector(".password-toggle");
      const passwordField = document.querySelector("#password");
      const eyeOpen = document.getElementById("eye-open");
      const eyeClosed = document.getElementById("eye-closed");

      seePassword.addEventListener("click", () => {
        if (passwordField.type === "password") {
          passwordField.type = "text";
        } else {
          passwordField.type = "password";
        }
        if (eyeOpen.style.display === "none") {
          eyeOpen.style.display = "block";
          eyeClosed.style.display = "none";
        } else {
          eyeOpen.style.display = "none";
          eyeClosed.style.display = "block";
        }
      });
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid: 1;
  align-items: center;
}
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-container {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 800px;
  height: 800px;
}

.login-container h2 {
  margin-bottom: 1.5rem;
  font-size: xx-large;
  color: rgb(68, 177, 77);
}

.input-group {
  margin-bottom: 1.5rem;
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 0.75rem;
  padding-left: 2.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
}

.input-group input:focus {
  border-color: rgb(68, 177, 77);
}

.input-group i {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}

.login-btn {
  display: flex;
  width: 100%;
  height: 4.76vh;
  max-height: 4.76vh;
  padding: 0.75rem;
  background-color: rgb(68, 177, 77);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.login-btn img {
  height: 160%;
}

.login-btn:hover {
  background-color: rgb(51, 134, 58);
}

.options {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.options a {
  color: rgb(68, 177, 77);
  text-decoration: none;
}

.options a:hover {
  text-decoration: underline;
}

.password-toggle {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 24px;
  height: 24px;
  color: #888;
}

.password-toggle:hover {
  color: #333;
}

svg.size-6:not(.password-eye) {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}

svg.password-eye.size-6 {
  display: flex;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}

img.home {
  margin-bottom: 20px;
  width: 400px;
  height: 400px;
}

/* Botão de logout */

.logout-btn {
  display: flex;
  width: 100%;
  height: 4.76vh;
  max-height: 4.76vh;
  padding: 0.75rem;
  background-color: rgba(255, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 13%;
}

.logout-btn:hover {
  background-color: rgb(255, 0, 0);
}

.logout-btn,
span,
img {
  transition: all 0.3s;
}

.logout-btn img {
  position: relative;
  transform: translateX(330px);
}

.logout-btn:hover span {
  color: transparent;
}

.logout-btn:hover img {
  width: 4%;
  transform: translateX(0);
}
</style>
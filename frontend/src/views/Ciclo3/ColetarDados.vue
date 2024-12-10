<template>
  <div class="demo-page">
    <div class="demo-page-navigation">
      <nav>
        <ul>
          <li>
            <BtnBack @click="backPage"></BtnBack>
          </li>
          <li>
            <a v-scroll-to="'#simpleMenuOption1'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-align-justify"
              >
                <line x1="21" y1="10" x2="3" y2="10" />
                <line x1="21" y1="6" x2="3" y2="6" />
                <line x1="21" y1="14" x2="3" y2="14" />
                <line x1="21" y1="18" x2="3" y2="18" />
              </svg>
              Itens</a
            >
          </li>
          <li>
            <a v-scroll-to="'#validation1'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-align-justify"
              >
                <line x1="21" y1="10" x2="3" y2="10" />
                <line x1="21" y1="6" x2="3" y2="6" />
                <line x1="21" y1="14" x2="3" y2="14" />
                <line x1="21" y1="18" x2="3" y2="18" />
              </svg>
              Remanufatura 1</a
            >
          </li>
          <li>
            <a v-scroll-to="'#validation2'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-align-justify"
              >
                <line x1="21" y1="10" x2="3" y2="10" />
                <line x1="21" y1="6" x2="3" y2="6" />
                <line x1="21" y1="14" x2="3" y2="14" />
                <line x1="21" y1="18" x2="3" y2="18" />
              </svg>
              Remanufatura 2</a
            >
          </li>
          <li>
            <a v-scroll-to="'#additional'">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-check-square"
              >
                <polyline points="9 11 12 14 22 4" />
                <path
                  d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                />
              </svg>
              Informações Adicionais</a
            >
          </li>
          <li>
            <a @click="pageItens">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-server"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
              Consultar</a
            >
          </li>
          <li>
            <BtnContinue @click="nextPage"></BtnContinue>
          </li>
        </ul>
      </nav>
    </div>
    <main class="demo-page-content">
      <section>
        <div class="href-target" id="simpleMenuOption1"></div>
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-align-justify"
          >
            <line x1="21" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="3" y2="18" />
          </svg>
          Itens
        </h1>
        <p>Cadastro dos Itens</p>

        <!-- ID Item Banco -->
        <!-- <div class="nice-form-group">
          <label>Item</label>
          <input type="text" :placeholder="idPlaceholder" value="" disabled />
        </div> -->

        <div class="nice-form-group">
          <label>COD. Item</label>
          <input
            v-model="codItem"
            type="number"
            placeholder="COD. Item"
            value=""
          />
        </div>
        <div class="nice-form-group">
          <label>Descrição</label>
          <input
            v-model="descricao"
            type="text"
            placeholder="Descrição"
            value=""
            maxlength="100"
          />
        </div>
        <div class="nice-form-group">
          <label>Material</label>
          <input
            v-model="material"
            type="text"
            placeholder="Material"
            value=""
            maxlength="50"
          />
        </div>
        <div class="nice-form-group">
          <label>Compos. química</label>
          <input
            v-model="composQuimica"
            type="text"
            placeholder="Compos. química"
            value=""
            maxlength="50"
          />
        </div>
        <div class="nice-form-group">
          <label>Quantidade</label>
          <input
            v-model="quantidade"
            type="text"
            placeholder="Quantidade"
            data-js="number"
          />
        </div>
        <div class="nice-form-group">
          <label>Unidade</label>
          <input
            v-model="unidade"
            type="text"
            placeholder="Unidade"
            value=""
            maxlength="50"
          />
        </div>
        <div class="nice-form-group">
          <label>Peso unit. Kg</label>
          <input
            v-model="pesoUnitKg"
            type="text"
            placeholder="Peso unit. Kg"
            value=""
            data-js="peso"
          />
        </div>
        <div class="nice-form-group">
          <label>Custo unitário</label>
          <input
            v-model="custoUnit"
            type="text"
            placeholder="Custo unitário"
            value=""
            data-js="money"
          />
        </div>
        <div class="nice-form-group">
          <label>Demanda mensal</label>
          <input
            v-model="demandaMensal"
            type="text"
            placeholder="Demanda mensal"
            value=""
            data-js="money"
          />
        </div>
      </section>

      <section>
        <div class="href-target" id="validation1"></div>
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-align-justify"
          >
            <line x1="21" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="3" y2="18" />
          </svg>
          Validação do processo de Remanufatura (Etapa vs Propriedades) 1
        </h1>

        <div class="form-container part1">
          <form id="remanu-form">
            <div class="grid-container">
              <div class="grid-item header subtitle"></div>
              <div class="grid-item header">Identificação</div>
              <div class="grid-item header">Verificação</div>
              <div class="grid-item header">Acesso</div>
              <div class="grid-item header">R.Desgaste</div>
              <div class="grid-item header">Manuseio</div>

              <!-- Linha de Inspeção -->
              <div class="grid-item header-col">Inspeção</div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('inspecaoIdentificacao', e.target)"
              >
                {{ inspecaoIdentificacao }}
              </div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('inspecaoVerificacao', e.target)"
              >
                {{ inspecaoVerificacao }}
              </div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('inspecaoAcesso', e.target)"
              >
                {{ inspecaoAcesso }}
              </div>
              <div
                class="grid-item not-selectable"
                data-name="inspecao-desgaste"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="inspecao-manuseio"
              ></div>

              <!-- Linha de Limpeza -->
              <div class="grid-item header-col">Limpeza</div>
              <div
                class="grid-item not-selectable"
                data-name="limpeza-identificacao"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="limpeza-verificacao"
              ></div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('limpezaAcesso', e.target)"
              >
                {{ limpezaAcesso }}
              </div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('limpezaDesgaste', e.target)"
              >
                {{ limpezaDesgaste }}
              </div>
              <div
                class="grid-item not-selectable"
                data-name="limpeza-manuseio"
              ></div>

              <!-- Linha de Desmontagem -->
              <div class="grid-item header-col">Desmontagem</div>
              <div
                class="grid-item selectable"
                @click="
                  (e) => changeValue('desmontagemIdentificacao', e.target)
                "
              >
                {{ desmontagemIdentificacao }}
              </div>
              <div
                class="grid-item not-selectable"
                data-name="desmontagem-verificacao"
              ></div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('desmontagemAcesso', e.target)"
              >
                {{ desmontagemAcesso }}
              </div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('desmontagemDesgaste', e.target)"
              >
                {{ desmontagemDesgaste }}
              </div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('desmontagemManuseio', e.target)"
              >
                {{ desmontagemManuseio }}
              </div>

              <!-- Linha de Armazenagem -->
              <div class="grid-item header-col">Armazenagem</div>
              <div
                class="grid-item selectable"
                @click="
                  (e) => changeValue('armazenagemIdentificacao', e.target)
                "
              >
                {{ armazenagemIdentificacao }}
              </div>
              <div
                class="grid-item not-selectable"
                data-name="armazenagem-verificacao"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="armazenagem-acesso"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="armazenagem-desgaste"
              ></div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('armazenagemManuseio', e.target)"
              >
                {{ armazenagemManuseio }}
              </div>

              <!-- Linha de Reprocessar -->
              <div class="grid-item header-col">Reprocessar</div>
              <div
                class="grid-item not-selectable"
                data-name="reprocessar-identificacao"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="reprocessar-verificacao"
              ></div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('reprocessarAcesso', e.target)"
              >
                {{ reprocessarAcesso }}
              </div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('reprocessarDesgaste', e.target)"
              >
                {{ reprocessarDesgaste }}
              </div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('reprocessarManuseio', e.target)"
              >
                {{ reprocessarManuseio }}
              </div>

              <!-- Linha de Remontar -->
              <div class="grid-item header-col">Remontar</div>
              <div
                class="grid-item not-selectable"
                data-name="remontar-identificacao"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="remontar-verificacao"
              ></div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('remontarAcesso', e.target)"
              >
                {{ remontarAcesso }}
              </div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('remontarDesgaste', e.target)"
              >
                {{ remontarDesgaste }}
              </div>
              <div
                class="grid-item not-selectable"
                data-name="remontar-manuseio"
              ></div>

              <!-- Linha de Testar -->
              <div class="grid-item header-col">Testar</div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('testarIdentificacao', e.target)"
              >
                {{ testarIdentificacao }}
              </div>
              <div
                class="grid-item not-selectable"
                data-name="testar-verificacao"
              ></div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('testarAcesso', e.target)"
              >
                {{ testarAcesso }}
              </div>
              <div
                class="grid-item not-selectable"
                data-name="testar-desgaste"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="testar-manuseio"
              ></div>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div class="href-target" id="validation2"></div>
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-align-justify"
          >
            <line x1="21" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="3" y2="18" />
          </svg>
          Validação do processo de Remanufatura (Etapa vs Propriedades) 2
        </h1>

        <div class="form-container part2">
          <form id="remanu-form">
            <div class="grid-container">
              <div class="grid-item header subtitle2"></div>
              <div class="grid-item header">Separação</div>
              <div class="grid-item header">Empilhamento</div>
              <div class="grid-item header">Segurança</div>
              <div class="grid-item header">Alinhamento</div>

              <div class="grid-item header-col">Inspeção</div>
              <div
                class="grid-item not-selectable"
                data-name="inspecao-separacao"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="inspecao-empilhamento"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="inspecao-seguranca"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="inspecao-alinhamento"
              ></div>

              <div class="grid-item header-col">Limpeza</div>
              <div
                class="grid-item not-selectable"
                data-name="limpeza-separacao"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="limpeza-empilhamento"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="limpeza-seguranca"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="limpeza-alinhamento"
              ></div>

              <div class="grid-item header-col">Desmontagem</div>
              <div
                class="grid-item selectable"
                data-name="desmontagem-separacao"
                @click="(e) => changeValue('desmontagemSeparacao', e.target)"
              >
                {{ desmontagemSeparacao }}
              </div>
              <div
                class="grid-item not-selectable"
                data-name="desmontagem-empilhamento"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="desmontagem-seguranca"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="desmontagem-alinhamento"
              ></div>

              <div class="grid-item header-col">Armazenagem</div>
              <div
                class="grid-item not-selectable"
                data-name="armazenagem-separacao"
              ></div>
              <div
                class="grid-item selectable"
                data-name="armazenagem-empilhamento"
                @click="(e) => changeValue('armazenagemEmpinhamento', e.target)"
              >
                {{ armazenagemEmpinhamento }}
              </div>
              <div
                class="grid-item not-selectable"
                data-name="armazenagem-seguranca"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="armazenagem-alinhamento"
              ></div>

              <div class="grid-item header-col">Reprocessar</div>
              <div
                class="grid-item selectable"
                data-name="reprocessar-separacao"
                @click="(e) => changeValue('reprocessarSeparacao', e.target)"
              >
                {{ reprocessarSeparacao }}
              </div>
              <div
                class="grid-item not-selectable"
                data-name="reprocessar-empilhamento"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="reprocessar-seguranca"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="reprocessar-alinhamento"
              ></div>

              <div class="grid-item header-col">Remontar</div>
              <div
                class="grid-item not-selectable"
                data-name="remontar-separacao"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="remontar-empilhamento"
              ></div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('remontarSeguranca', e.target)"
              >
                {{ remontarSeguranca }}
              </div>
              <div
                class="grid-item selectable"
                @click="(e) => changeValue('remontarAlinhamento', e.target)"
              >
                {{ remontarAlinhamento }}
              </div>

              <div class="grid-item header-col">Testar</div>
              <div
                class="grid-item not-selectable"
                data-name="testar-separacao"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="testar-empilhamento"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="testar-seguranca"
              ></div>
              <div
                class="grid-item not-selectable"
                data-name="testar-alinhamento"
              ></div>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div class="href-target" id="additional"></div>
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check-square"
          >
            <polyline points="9 11 12 14 22 4" />
            <path
              d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            />
          </svg>
          Informações Adicionais
        </h1>

        <fieldset class="nice-form-group">
          <div class="nice-form-group">
            <input
              @change="changeTypeItem('Renovável')"
              type="checkbox"
              id="check-3"
              class="switch"
              v-model="typeItem"
              value="Renovável"
            />
            <label for="check-3">Renovável</label>
          </div>

          <div class="nice-form-group">
            <input
              @change="changeTypeItem('Não Renovável')"
              type="checkbox"
              id="check-4"
              class="switch"
              v-model="typeItem"
              value="Não Renovável"
            />
            <label for="check-4">Não Renovável</label>
          </div>

          <div class="nice-form-group">
            <input
              @change="changeTypeItem('Reciclável')"
              type="checkbox"
              id="check-5"
              class="switch"
              v-model="typeItem"
              value="Reciclável"
            />
            <label for="check-5">Reciclável</label>
          </div>

          <div class="nice-form-group">
            <label>UP Cycling</label>
            <select v-model="upCycling">
              <option option disabled selected hidden>
                Selecione uma opção
              </option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <div class="nice-form-group">
            <label>DOWN Cycling</label>
            <select v-model="downCycling">
              <option option disabled selected hidden>
                Selecione uma opção
              </option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
        </fieldset>

        <details>
          <summary>
            <div class="toggle-code" @click="createItem">Cadastrar Item</div>
          </summary>
        </details>
      </section>
    </main>
    <Notifications />
  </div>
</template>
 
<script>
import { ref, watch, toRaw } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { useNotification } from "@kyvg/vue3-notification";
import { Notifications } from "@kyvg/vue3-notification";

import BtnBack from "@/components/Nav/BtnBack.vue";
import BtnContinue from "@/components/Nav/BtnContinue.vue";
import api from "../../api/api";

const idPlaceholder = ref(0);
const { notify } = useNotification();

const codItem = ref("");
const descricao = ref("");
const material = ref("");
const composQuimica = ref("");
const quantidade = ref("");
const unidade = ref("");
const pesoUnitKg = ref("");
const custoUnit = ref("");
const demandaMensal = ref("");

const inspecaoIdentificacao = ref("NÃO");
const inspecaoVerificacao = ref("NÃO");
const inspecaoAcesso = ref("NÃO");
const limpezaAcesso = ref("NÃO");
const limpezaDesgaste = ref("NÃO");
const desmontagemIdentificacao = ref("NÃO");
const desmontagemAcesso = ref("NÃO");
const desmontagemDesgaste = ref("NÃO");
const desmontagemManuseio = ref("NÃO");
const desmontagemSeparacao = ref("NÃO");
const armazenagemIdentificacao = ref("NÃO");
const armazenagemManuseio = ref("NÃO");
const armazenagemEmpinhamento = ref("NÃO");
const reprocessarAcesso = ref("NÃO");
const reprocessarDesgaste = ref("NÃO");
const reprocessarManuseio = ref("NÃO");
const reprocessarSeparacao = ref("NÃO");
const remontarAcesso = ref("NÃO");
const remontarDesgaste = ref("NÃO");
const remontarSeguranca = ref("NÃO");
const remontarAlinhamento = ref("NÃO");
const testarIdentificacao = ref("NÃO");
const testarAcesso = ref("NÃO");

const typeItem = ref(["Renovável"]);
const upCycling = ref("Selecione uma opção");
const downCycling = ref("Selecione uma opção");

export default {
  name: "C3-ColetarDados",
  setup() {
    const router = useRouter();
    const store = useStore();

    const requestBody = {
      inspecaoIdentificacao: toRaw(inspecaoIdentificacao.value),
      inspecaoVerificacao: toRaw(inspecaoVerificacao.value),
      inspecaoAcesso: toRaw(inspecaoAcesso.value),
      limpezaAcesso: toRaw(limpezaAcesso.value),
      limpezaDesgaste: toRaw(limpezaDesgaste.value),
      desmontagemIdentificacao: toRaw(desmontagemIdentificacao.value),
      desmontagemAcesso: toRaw(desmontagemAcesso.value),
      desmontagemDesgaste: toRaw(desmontagemDesgaste.value),
      desmontagemManuseio: toRaw(desmontagemManuseio.value),
      desmontagemSeparacao: toRaw(desmontagemSeparacao.value), // Adicionado
      armazenagemIdentificacao: toRaw(armazenagemIdentificacao.value),
      armazenagemManuseio: toRaw(armazenagemManuseio.value),
      armazenagemEmpinhamento: toRaw(armazenagemEmpinhamento.value), // Adicionado
      reprocessarAcesso: toRaw(reprocessarAcesso.value),
      reprocessarDesgaste: toRaw(reprocessarDesgaste.value),
      reprocessarManuseio: toRaw(reprocessarManuseio.value),
      reprocessarSeparacao: toRaw(reprocessarSeparacao.value), // Adicionado
      remontarAcesso: toRaw(remontarAcesso.value),
      remontarDesgaste: toRaw(remontarDesgaste.value),
      remontarSeguranca: toRaw(remontarSeguranca.value), // Adicionado
      remontarAlinhamento: toRaw(remontarAlinhamento.value), // Adicionado
      testarIdentificacao: toRaw(testarIdentificacao.value),
      testarAcesso: toRaw(testarAcesso.value),
    };

    const changeValue = (key, item) => {
      item.innerHTML = item.innerHTML === "NÃO" ? "SIM" : "NÃO";

      if (item.innerHTML === "NÃO") {
        item.style.backgroundColor = "#f8f8f8";
      } else {
        item.style.backgroundColor = "#01700c59";
      }

      requestBody[key] = item.innerHTML;
    };

    const nextPage = () => {
      router.push({
        name: "C3-AnalisarValidar",
      });
      store.dispatch("updateViewAnalisarValidar", false);
    };

    const backPage = () => {
      router.go(-1);
    };

    const pageItens = () => {
      router.push({
        name: "C3-Itens",
      });
    };

    const createItem = () => {
      console.log(Object.keys(requestBody).length);
      api
        .post("/itens/C3/createItem", {
          headers: {
            "Content-Type": "application/json",
          },
          data: requestBody,
        })
        .then(() => {
          idPlaceholder.value++;
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
            text: "Erro ao criar um novo item! " + err,
            type: "error", // Tipos possíveis: 'success', 'error', 'warning', etc.
            duration: 10000,
            pauseOnHover: true,
            closeOnClick: false,
          });
        });
    };

    const updateItemData = () => {
      Object.assign(requestBody, {
        cod_item: codItem.value,
        descricao: descricao.value,
        ref: "C3",
        material: material.value,
        compos_quimica: composQuimica.value,
        quantidade: quantidade.value,
        unidade: unidade.value,
        peso_unit_kg: pesoUnitKg.value,
        custo_unit: custoUnit.value,
        demanda_mensal: demandaMensal.value,
        type_item: typeItem.value[typeItem.value.length - 1],
        up_cycling: upCycling.value,
        down_cycling: downCycling.value,
      });
    };

    const changeTypeItem = (name) => {
      typeItem.value = [];
      typeItem.value.push(name);
    };
 
    watch(upCycling, () => {
      if (upCycling.value === "Sim") {
        downCycling.value = "Não";
      } else {
        downCycling.value = "Sim";
      }
    });

    watch(downCycling, () => {
      if (downCycling.value === "Sim") {
        upCycling.value = "Não";
      } else {
        upCycling.value = "Sim";
      }
    });

    watch(
      [
        codItem,
        descricao,
        material,
        composQuimica,
        quantidade,
        unidade,
        pesoUnitKg,
        custoUnit,
        demandaMensal,
        typeItem,
        upCycling,
        downCycling,
      ],
      () => {
        updateItemData();
      },
      { immediate: true } // Atualiza itemData imediatamente na montagem do componente
    );

    return {
      createItem,
      nextPage,
      backPage,
      pageItens,
      Notifications,
      changeTypeItem,
      changeValue,
      codItem,
      descricao,
      material,
      composQuimica,
      quantidade,
      unidade,
      pesoUnitKg,
      custoUnit,
      demandaMensal,
      typeItem,
      upCycling,
      downCycling,
      inspecaoIdentificacao,
      inspecaoVerificacao,
      inspecaoAcesso,
      limpezaAcesso,
      limpezaDesgaste,
      desmontagemIdentificacao,
      desmontagemAcesso,
      desmontagemDesgaste,
      desmontagemManuseio,
      armazenagemIdentificacao,
      armazenagemManuseio,
      armazenagemEmpinhamento,
      desmontagemSeparacao,
      reprocessarAcesso,
      reprocessarDesgaste,
      reprocessarManuseio,
      reprocessarSeparacao,
      remontarAcesso,
      remontarDesgaste,
      remontarSeguranca,
      remontarAlinhamento,
      testarIdentificacao,
      testarAcesso,
    };
  },
  mounted() {
    api
      .get("/itens/C3/count", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { nextId } = response.data;

        idPlaceholder.value = nextId;
      });
  },
  components: {
    BtnBack,
    BtnContinue,
  },
};
</script>


<style scoped>
.subtitle,
.subtitle2 {
  text-overflow: none !important;
  white-space: none !important;
  overflow: none !important;
}

.form-container1 h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-container .grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  font-size: 11px;
}

.form-container.part2 .grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.form-container .grid-item {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  max-width: 100px;
  text-overflow: ellipsis;
  font-size: 11px;
}

.grid-item {
  user-select: none;
}

.form-container .header {
  background-color: #01700c93;
  color: white;
  cursor: default;
  text-overflow: ellipsis;

  max-width: 100px;
}

.form-container .selectable {
  background-color: #f8f8f8;
  transition: background-color 0.3s, color 0.3s;
}

.form-container .selectable:hover {
  background-color: #e0e0e0;
}

.form-container .selectable.sim {
  background-color: #01700c59;
  color: white;
}

.demo-page {
  text-align: initial;
}

.demo-page-navigation img {
  width: 10%;
  margin-right: 6%;
}

.nice-form-group img {
  width: 100%;
  margin-top: 3%;
}

.not-selectable {
  background-color: #e0e0e0;
  cursor: not-allowed;
  opacity: 0.7;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: initial;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.nice-form-group {
  --nf-input-size: 1rem;
  --nf-input-font-size: calc(var(--nf-input-size) * 0.875);
  --nf-small-font-size: calc(var(--nf-input-size) * 0.875);
  --nf-input-font-family: inherit;
  --nf-label-font-family: inherit;
  --nf-input-color: #20242f;
  --nf-input-border-radius: 0.25rem;
  --nf-input-placeholder-color: #929292;
  --nf-input-border-color: #c0c4c9;
  --nf-input-border-width: 1px;
  --nf-input-border-style: solid;
  --nf-input-border-bottom-width: 2px;
  --nf-input-focus-border-color: #3b4ce2;
  --nf-input-background-color: #f9fafb;
  --nf-invalid-input-border-color: var(--nf-input-border-color);
  --nf-invalid-input-background-color: var(--nf-input-background-color);
  --nf-invalid-input-color: var(--nf-input-color);
  --nf-valid-input-border-color: var(--nf-input-border-color);
  --nf-valid-input-background-color: var(--nf-input-background-color);
  --nf-valid-input-color: inherit;
  --nf-invalid-input-border-bottom-color: red;
  --nf-valid-input-border-bottom-color: green;
  --nf-label-font-size: var(--nf-small-font-size);
  --nf-label-color: #374151;
  --nf-label-font-weight: 500;
  --nf-slider-track-background: #dfdfdf;
  --nf-slider-track-height: 0.25rem;
  --nf-slider-thumb-size: calc(var(--nf-slider-track-height) * 4);
  --nf-slider-track-border-radius: var(--nf-slider-track-height);
  --nf-slider-thumb-border-width: 2px;
  --nf-slider-thumb-border-focus-width: 1px;
  --nf-slider-thumb-border-color: #fff;
  --nf-slider-thumb-background: var(--nf-input-focus-border-color);
  display: block;
  margin-top: calc(var(--nf-input-size) * 1.5);
  line-height: 1;
  white-space: nowrap;
  --switch-orb-size: var(--nf-input-size);
  --switch-orb-offset: calc(var(--nf-input-border-width) * 2);
  --switch-width: calc(var(--nf-input-size) * 2.5);
  --switch-height: calc(var(--nf-input-size) * 1.25 + var(--switch-orb-offset));
}

.nice-form-group > label {
  font-weight: var(--nf-label-font-weight);
  display: block;
  color: var(--nf-label-color);
  font-size: var(--nf-label-font-size);
  font-family: var(--nf-label-font-family);
  margin-bottom: calc(var(--nf-input-size) / 2);
  white-space: normal;
}

.nice-form-group > label + small {
  font-style: normal;
}

.nice-form-group small {
  font-family: var(--nf-input-font-family);
  display: block;
  font-weight: 400;
  opacity: 0.75;
  font-size: var(--nf-small-font-size);
  margin-bottom: calc(var(--nf-input-size) * 0.75);
}

.nice-form-group small:last-child {
  margin-bottom: 0;
}

.nice-form-group > legend {
  font-weight: var(--nf-label-font-weight);
  display: block;
  color: var(--nf-label-color);
  font-size: var(--nf-label-font-size);
  font-family: var(--nf-label-font-family);
  margin-bottom: calc(var(--nf-input-size) / 5);
}

.nice-form-group > .nice-form-group {
  margin-top: calc(var(--nf-input-size) / 2);
}

.nice-form-group > input[type="checkbox"],
.nice-form-group > input[type="date"],
.nice-form-group > input[type="email"],
.nice-form-group > input[type="month"],
.nice-form-group > input[type="number"],
.nice-form-group > input[type="password"],
.nice-form-group > input[type="radio"],
.nice-form-group > input[type="search"],
.nice-form-group > input[type="tel"],
.nice-form-group > input[type="text"],
.nice-form-group > input[type="time"],
.nice-form-group > input[type="url"],
.nice-form-group > input[type="week"],
.nice-form-group > select,
.nice-form-group > textarea {
  background: var(--nf-input-background-color);
  font-family: inherit;
  font-size: var(--nf-input-font-size);
  border-bottom-width: var(--nf-input-border-width);
  font-family: var(--nf-input-font-family);
  box-shadow: none;
  border-radius: var(--nf-input-border-radius);
  border: var(--nf-input-border-width) var(--nf-input-border-style)
    var(--nf-input-border-color);
  border-bottom: var(--nf-input-border-bottom-width)
    var(--nf-input-border-style) var(--nf-input-border-color);
  color: var(--nf-input-color);
  width: 100%;
  padding: calc(var(--nf-input-size) * 0.75);
  height: calc(var(--nf-input-size) * 2.75);
  line-height: normal;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.15s ease-out;
  --icon-padding: calc(var(--nf-input-size) * 2.25);
  --icon-background-offset: calc(var(--nf-input-size) * 0.75);
}

.nice-form-group
  > input[type="checkbox"]:required:not(:placeholder-shown):invalid,
.nice-form-group > input[type="date"]:required:not(:placeholder-shown):invalid,
.nice-form-group > input[type="email"]:required:not(:placeholder-shown):invalid,
.nice-form-group > input[type="month"]:required:not(:placeholder-shown):invalid,
.nice-form-group
  > input[type="number"]:required:not(:placeholder-shown):invalid,
.nice-form-group
  > input[type="password"]:required:not(:placeholder-shown):invalid,
.nice-form-group > input[type="radio"]:required:not(:placeholder-shown):invalid,
.nice-form-group
  > input[type="search"]:required:not(:placeholder-shown):invalid,
.nice-form-group > input[type="tel"]:required:not(:placeholder-shown):invalid,
.nice-form-group > input[type="text"]:required:not(:placeholder-shown):invalid,
.nice-form-group > input[type="time"]:required:not(:placeholder-shown):invalid,
.nice-form-group > input[type="url"]:required:not(:placeholder-shown):invalid,
.nice-form-group > input[type="week"]:required:not(:placeholder-shown):invalid,
.nice-form-group > select:required:not(:placeholder-shown):invalid,
.nice-form-group > textarea:required:not(:placeholder-shown):invalid {
  background-color: var(--nf-invalid-input-background-color);
  border-bottom-color: var(--nf-valid-input-border-color);
  border-color: var(--nf-valid-input-border-color)
    var(--nf-valid-input-border-color)
    var(--nf-invalid-input-border-bottom-color);
  color: var(--nf-invalid-input-color);
}

.nice-form-group
  > input[type="checkbox"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="date"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="email"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="month"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="number"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="password"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="radio"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="search"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="tel"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="text"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="time"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="url"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group
  > input[type="week"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group > select:required:not(:placeholder-shown):invalid:focus,
.nice-form-group > textarea:required:not(:placeholder-shown):invalid:focus {
  background-color: var(--nf-input-background-color);
  border-color: var(--nf-input-border-color);
  color: var(--nf-input-color);
}

.nice-form-group
  > input[type="checkbox"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="date"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="email"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="month"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="number"]:required:not(:placeholder-shown):valid,
.nice-form-group
  > input[type="password"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="radio"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="search"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="tel"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="text"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="time"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="url"]:required:not(:placeholder-shown):valid,
.nice-form-group > input[type="week"]:required:not(:placeholder-shown):valid,
.nice-form-group > select:required:not(:placeholder-shown):valid,
.nice-form-group > textarea:required:not(:placeholder-shown):valid {
  background-color: var(--nf-valid-input-background-color);
  border-bottom-color: var(--nf-valid-input-border-color);
  border-color: var(--nf-valid-input-border-color)
    var(--nf-valid-input-border-color) var(--nf-valid-input-border-bottom-color);
  color: var(--nf-valid-input-color);
}

.nice-form-group > input[type="checkbox"]:disabled,
.nice-form-group > input[type="date"]:disabled,
.nice-form-group > input[type="email"]:disabled,
.nice-form-group > input[type="month"]:disabled,
.nice-form-group > input[type="number"]:disabled,
.nice-form-group > input[type="password"]:disabled,
.nice-form-group > input[type="radio"]:disabled,
.nice-form-group > input[type="search"]:disabled,
.nice-form-group > input[type="tel"]:disabled,
.nice-form-group > input[type="text"]:disabled,
.nice-form-group > input[type="time"]:disabled,
.nice-form-group > input[type="url"]:disabled,
.nice-form-group > input[type="week"]:disabled,
.nice-form-group > select:disabled,
.nice-form-group > textarea:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}

.nice-form-group > input[type="checkbox"]::-webkit-input-placeholder,
.nice-form-group > input[type="date"]::-webkit-input-placeholder,
.nice-form-group > input[type="email"]::-webkit-input-placeholder,
.nice-form-group > input[type="month"]::-webkit-input-placeholder,
.nice-form-group > input[type="number"]::-webkit-input-placeholder,
.nice-form-group > input[type="password"]::-webkit-input-placeholder,
.nice-form-group > input[type="radio"]::-webkit-input-placeholder,
.nice-form-group > input[type="search"]::-webkit-input-placeholder,
.nice-form-group > input[type="tel"]::-webkit-input-placeholder,
.nice-form-group > input[type="text"]::-webkit-input-placeholder,
.nice-form-group > input[type="time"]::-webkit-input-placeholder,
.nice-form-group > input[type="url"]::-webkit-input-placeholder,
.nice-form-group > input[type="week"]::-webkit-input-placeholder,
.nice-form-group > select::-webkit-input-placeholder,
.nice-form-group > textarea::-webkit-input-placeholder {
  color: var(--nf-input-placeholder-color);
  letter-spacing: 0;
}

.nice-form-group > input[type="checkbox"]:-ms-input-placeholder,
.nice-form-group > input[type="date"]:-ms-input-placeholder,
.nice-form-group > input[type="email"]:-ms-input-placeholder,
.nice-form-group > input[type="month"]:-ms-input-placeholder,
.nice-form-group > input[type="number"]:-ms-input-placeholder,
.nice-form-group > input[type="password"]:-ms-input-placeholder,
.nice-form-group > input[type="radio"]:-ms-input-placeholder,
.nice-form-group > input[type="search"]:-ms-input-placeholder,
.nice-form-group > input[type="tel"]:-ms-input-placeholder,
.nice-form-group > input[type="text"]:-ms-input-placeholder,
.nice-form-group > input[type="time"]:-ms-input-placeholder,
.nice-form-group > input[type="url"]:-ms-input-placeholder,
.nice-form-group > input[type="week"]:-ms-input-placeholder,
.nice-form-group > select:-ms-input-placeholder,
.nice-form-group > textarea:-ms-input-placeholder {
  color: var(--nf-input-placeholder-color);
  letter-spacing: 0;
}

.nice-form-group > input[type="checkbox"]:-moz-placeholder,
.nice-form-group > input[type="checkbox"]::-moz-placeholder,
.nice-form-group > input[type="date"]:-moz-placeholder,
.nice-form-group > input[type="date"]::-moz-placeholder,
.nice-form-group > input[type="email"]:-moz-placeholder,
.nice-form-group > input[type="email"]::-moz-placeholder,
.nice-form-group > input[type="month"]:-moz-placeholder,
.nice-form-group > input[type="month"]::-moz-placeholder,
.nice-form-group > input[type="number"]:-moz-placeholder,
.nice-form-group > input[type="number"]::-moz-placeholder,
.nice-form-group > input[type="password"]:-moz-placeholder,
.nice-form-group > input[type="password"]::-moz-placeholder,
.nice-form-group > input[type="radio"]:-moz-placeholder,
.nice-form-group > input[type="radio"]::-moz-placeholder,
.nice-form-group > input[type="search"]:-moz-placeholder,
.nice-form-group > input[type="search"]::-moz-placeholder,
.nice-form-group > input[type="tel"]:-moz-placeholder,
.nice-form-group > input[type="tel"]::-moz-placeholder,
.nice-form-group > input[type="text"]:-moz-placeholder,
.nice-form-group > input[type="text"]::-moz-placeholder,
.nice-form-group > input[type="time"]:-moz-placeholder,
.nice-form-group > input[type="time"]::-moz-placeholder,
.nice-form-group > input[type="url"]:-moz-placeholder,
.nice-form-group > input[type="url"]::-moz-placeholder,
.nice-form-group > input[type="week"]:-moz-placeholder,
.nice-form-group > input[type="week"]::-moz-placeholder,
.nice-form-group > select:-moz-placeholder,
.nice-form-group > select::-moz-placeholder,
.nice-form-group > textarea:-moz-placeholder,
.nice-form-group > textarea::-moz-placeholder {
  color: var(--nf-input-placeholder-color);
  letter-spacing: 0;
}

.nice-form-group > input[type="checkbox"]:focus,
.nice-form-group > input[type="date"]:focus,
.nice-form-group > input[type="email"]:focus,
.nice-form-group > input[type="month"]:focus,
.nice-form-group > input[type="number"]:focus,
.nice-form-group > input[type="password"]:focus,
.nice-form-group > input[type="radio"]:focus,
.nice-form-group > input[type="search"]:focus,
.nice-form-group > input[type="tel"]:focus,
.nice-form-group > input[type="text"]:focus,
.nice-form-group > input[type="time"]:focus,
.nice-form-group > input[type="url"]:focus,
.nice-form-group > input[type="week"]:focus,
.nice-form-group > select:focus,
.nice-form-group > textarea:focus {
  outline: none;
  border-color: var(--nf-input-focus-border-color);
}

.nice-form-group > input[type="checkbox"] + small,
.nice-form-group > input[type="date"] + small,
.nice-form-group > input[type="email"] + small,
.nice-form-group > input[type="month"] + small,
.nice-form-group > input[type="number"] + small,
.nice-form-group > input[type="password"] + small,
.nice-form-group > input[type="radio"] + small,
.nice-form-group > input[type="search"] + small,
.nice-form-group > input[type="tel"] + small,
.nice-form-group > input[type="text"] + small,
.nice-form-group > input[type="time"] + small,
.nice-form-group > input[type="url"] + small,
.nice-form-group > input[type="week"] + small,
.nice-form-group > select + small,
.nice-form-group > textarea + small {
  margin-top: 0.5rem;
}

.nice-form-group > input[type="checkbox"].icon-left,
.nice-form-group > input[type="date"].icon-left,
.nice-form-group > input[type="email"].icon-left,
.nice-form-group > input[type="month"].icon-left,
.nice-form-group > input[type="number"].icon-left,
.nice-form-group > input[type="password"].icon-left,
.nice-form-group > input[type="radio"].icon-left,
.nice-form-group > input[type="search"].icon-left,
.nice-form-group > input[type="tel"].icon-left,
.nice-form-group > input[type="text"].icon-left,
.nice-form-group > input[type="time"].icon-left,
.nice-form-group > input[type="url"].icon-left,
.nice-form-group > input[type="week"].icon-left,
.nice-form-group > select.icon-left,
.nice-form-group > textarea.icon-left {
  background-position: left var(--icon-background-offset) bottom 50%;
  padding-left: var(--icon-padding);
  background-size: var(--nf-input-size);
}

.nice-form-group > input[type="checkbox"].icon-right,
.nice-form-group > input[type="date"].icon-right,
.nice-form-group > input[type="email"].icon-right,
.nice-form-group > input[type="month"].icon-right,
.nice-form-group > input[type="number"].icon-right,
.nice-form-group > input[type="password"].icon-right,
.nice-form-group > input[type="radio"].icon-right,
.nice-form-group > input[type="search"].icon-right,
.nice-form-group > input[type="tel"].icon-right,
.nice-form-group > input[type="text"].icon-right,
.nice-form-group > input[type="time"].icon-right,
.nice-form-group > input[type="url"].icon-right,
.nice-form-group > input[type="week"].icon-right,
.nice-form-group > select.icon-right,
.nice-form-group > textarea.icon-right {
  background-position: right var(--icon-background-offset) bottom 50%;
  padding-right: var(--icon-padding);
  background-size: var(--nf-input-size);
}

.nice-form-group > input[type="checkbox"]:-webkit-autofill,
.nice-form-group > input[type="date"]:-webkit-autofill,
.nice-form-group > input[type="email"]:-webkit-autofill,
.nice-form-group > input[type="month"]:-webkit-autofill,
.nice-form-group > input[type="number"]:-webkit-autofill,
.nice-form-group > input[type="password"]:-webkit-autofill,
.nice-form-group > input[type="radio"]:-webkit-autofill,
.nice-form-group > input[type="search"]:-webkit-autofill,
.nice-form-group > input[type="tel"]:-webkit-autofill,
.nice-form-group > input[type="text"]:-webkit-autofill,
.nice-form-group > input[type="time"]:-webkit-autofill,
.nice-form-group > input[type="url"]:-webkit-autofill,
.nice-form-group > input[type="week"]:-webkit-autofill,
.nice-form-group > select:-webkit-autofill,
.nice-form-group > textarea:-webkit-autofill {
  padding: calc(var(--nf-input-size) * 0.75) !important;
}

.nice-form-group > input[type="search"]:placeholder-shown {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='M21 21l-4.35-4.35'/%3E%3C/svg%3E");
  background-position: left calc(var(--nf-input-size) * 0.75) bottom 50%;
  padding-left: calc(var(--nf-input-size) * 2.25);
  background-size: var(--nf-input-size);
  background-repeat: no-repeat;
}

.nice-form-group > input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  width: var(--nf-input-size);
  height: var(--nf-input-size);
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x'%3E%3Cpath d='M18 6L6 18M6 6l12 12'/%3E%3C/svg%3E");
}

.nice-form-group > input[type="search"]:focus {
  padding-left: calc(var(--nf-input-size) * 0.75);
  background-position: left calc(var(--nf-input-size) * -1) bottom 50%;
}

.nice-form-group > input[type="email"][class^="icon"] {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-at-sign'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
}

.nice-form-group > input[type="tel"][class^="icon"] {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-phone'%3E%3Cpath d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
}

.nice-form-group > input[type="url"][class^="icon"] {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-link'%3E%3Cpath d='M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
}

.nice-form-group > input[type="password"] {
  letter-spacing: 2px;
}

.nice-form-group > input[type="password"][class^="icon"] {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-lock'%3E%3Crect x='3' y='11' width='18' height='11' rx='2' ry='2'/%3E%3Cpath d='M7 11V7a5 5 0 0110 0v4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
}

.nice-form-group > input[type="range"] {
  width: 100%;
  cursor: pointer;
}

.nice-form-group > input[type="range"]:focus {
  outline: none;
}

.nice-form-group > input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: var(--nf-slider-track-height);
  background: var(--nf-slider-track-background);
  border-radius: var(--nf-slider-track-border-radius);
}

.nice-form-group > input[type="range"]::-moz-range-track {
  width: 100%;
  height: var(--nf-slider-track-height);
  background: var(--nf-slider-track-background);
  border-radius: var(--nf-slider-track-border-radius);
}

.nice-form-group > input[type="range"]::-webkit-slider-thumb {
  height: var(--nf-slider-thumb-size);
  width: var(--nf-slider-thumb-size);
  border-radius: var(--nf-slider-thumb-size);
  background: var(--nf-slider-thumb-background);
  border: 0;
  border: var(--nf-slider-thumb-border-width) solid
    var(--nf-slider-thumb-border-color);
  -webkit-appearance: none;
  appearance: none;
  margin-top: calc(
    var(--nf-slider-track-height) * 0.5 - var(--nf-slider-thumb-size) * 0.5
  );
}

.nice-form-group > input[type="range"]::-moz-range-thumb {
  height: var(--nf-slider-thumb-size);
  width: var(--nf-slider-thumb-size);
  border-radius: var(--nf-slider-thumb-size);
  background: var(--nf-slider-thumb-background);
  border: 0;
  border: var(--nf-slider-thumb-border-width) solid
    var(--nf-slider-thumb-border-color);
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
}

.nice-form-group > input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 var(--nf-slider-thumb-border-focus-width)
    var(--nf-slider-thumb-background);
}

.nice-form-group > input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 var(--nf-slider-thumb-border-focus-width)
    var(--nf-slider-thumb-background);
}

.nice-form-group > input[type="color"] {
  border: var(--nf-input-border-width) solid var(--nf-input-border-color);
  border-bottom-width: var(--nf-input-border-bottom-width);
  height: calc(var(--nf-input-size) * 2);
  border-radius: var(--nf-input-border-radius);
  padding: calc(var(--nf-input-border-width) * 2);
}

.nice-form-group > input[type="color"]:focus {
  outline: none;
  border-color: var(--nf-input-focus-border-color);
}

.nice-form-group > input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 5%;
}

.nice-form-group > input[type="color"]::-moz-color-swatch {
  border-radius: calc(var(--nf-input-border-radius) / 2);
  border: none;
}

.nice-form-group > input[type="color"]::-webkit-color-swatch {
  border-radius: calc(var(--nf-input-border-radius) / 2);
  border: none;
}

.nice-form-group > input[type="date"],
.nice-form-group > input[type="month"],
.nice-form-group > input[type="week"] {
  min-width: 14em;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-calendar'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'/%3E%3Cpath d='M16 2v4M8 2v4M3 10h18'/%3E%3C/svg%3E");
}

.nice-form-group > input[type="time"] {
  min-width: 6em;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-clock'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 6v6l4 2'/%3E%3C/svg%3E");
}

.nice-form-group > input[type="date"],
.nice-form-group > input[type="month"],
.nice-form-group > input[type="time"],
.nice-form-group > input[type="week"] {
  background-position: right calc(var(--nf-input-size) * 0.75) bottom 50%;
  background-repeat: no-repeat;
  background-size: var(--nf-input-size);
  width: auto;
}

.nice-form-group > input[type="date"]::-webkit-calendar-picker-indicator,
.nice-form-group > input[type="date"]::-webkit-inner-spin-button,
.nice-form-group > input[type="month"]::-webkit-calendar-picker-indicator,
.nice-form-group > input[type="month"]::-webkit-inner-spin-button,
.nice-form-group > input[type="time"]::-webkit-calendar-picker-indicator,
.nice-form-group > input[type="time"]::-webkit-inner-spin-button,
.nice-form-group > input[type="week"]::-webkit-calendar-picker-indicator,
.nice-form-group > input[type="week"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  cursor: pointer;
  opacity: 0;
}

@-moz-document url-prefix() {
  .nice-form-group > input[type="date"],
  .nice-form-group > input[type="month"],
  .nice-form-group > input[type="time"],
  .nice-form-group > input[type="week"] {
    min-width: auto;
    width: auto;
    background-image: none;
  }
}

.nice-form-group > textarea {
  height: auto;
}

.nice-form-group > input[type="checkbox"],
.nice-form-group > input[type="radio"] {
  width: var(--nf-input-size);
  height: var(--nf-input-size);
  padding: inherit;
  margin: 0;
  display: inline-block;
  vertical-align: top;
  border-radius: calc(var(--nf-input-border-radius) / 2);
  border-width: var(--nf-input-border-width);
  cursor: pointer;
  background-position: 50%;
}

.nice-form-group > input[type="checkbox"]:focus:not(:checked),
.nice-form-group > input[type="radio"]:focus:not(:checked) {
  border: var(--nf-input-border-width) solid var(--nf-input-focus-border-color);
  outline: none;
}

.nice-form-group > input[type="checkbox"]:hover,
.nice-form-group > input[type="radio"]:hover {
  border: var(--nf-input-border-width) solid var(--nf-input-focus-border-color);
}

.nice-form-group > input[type="checkbox"] + label,
.nice-form-group > input[type="radio"] + label {
  display: inline-block;
  margin-bottom: 0;
  padding-left: calc(var(--nf-input-size) / 2.5);
  font-weight: 400;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  max-width: calc(100% - var(--nf-input-size) * 2);
  line-height: normal;
}

.nice-form-group > input[type="checkbox"] + label > small,
.nice-form-group > input[type="radio"] + label > small {
  margin-top: calc(var(--nf-input-size) / 4);
}

.nice-form-group > input[type="checkbox"]:checked {
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E")
    no-repeat 50%/85%;
  background-color: var(--nf-input-focus-border-color);
  border-color: var(--nf-input-focus-border-color);
}

.nice-form-group > input[type="radio"] {
  border-radius: 100%;
}

.nice-form-group > input[type="radio"]:checked {
  background-color: var(--nf-input-focus-border-color);
  border-color: var(--nf-input-focus-border-color);
  box-shadow: inset 0 0 0 3px #fff;
}

.nice-form-group > input[type="checkbox"].switch {
  width: var(--switch-width);
  height: var(--switch-height);
  border-radius: var(--switch-height);
  position: relative;
}

.nice-form-group > input[type="checkbox"].switch:after {
  background: var(--nf-input-border-color);
  border-radius: var(--switch-orb-size);
  height: var(--switch-orb-size);
  left: var(--switch-orb-offset);
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: var(--switch-orb-size);
  content: "";
  transition: all 0.2s ease-out;
}

.nice-form-group > input[type="checkbox"].switch + label {
  margin-top: calc(var(--switch-height) / 8);
}

.nice-form-group > input[type="checkbox"].switch:checked {
  background: none;
  background-position: 0 0;
  background-color: var(--nf-input-focus-border-color);
}

.nice-form-group > input[type="checkbox"].switch:checked:after {
  -webkit-transform: translateY(-50%)
    translateX(calc(var(--switch-width) / 2 - var(--switch-orb-offset)));
  transform: translateY(-50%)
    translateX(calc(var(--switch-width) / 2 - var(--switch-orb-offset)));
  background: #fff;
}

.nice-form-group > input[type="file"] {
  background: rgba(0, 0, 0, 0.025);
  padding: var(--nf-input-size);
  display: block;
  width: 100%;
  border-radius: var(--nf-input-border-radius);
  border: 1px dashed var(--nf-input-border-color);
  outline: none;
  cursor: pointer;
}

.nice-form-group > input[type="file"]:focus,
.nice-form-group > input[type="file"]:hover {
  border-color: var(--nf-input-focus-border-color);
}

.nice-form-group > input[type="file"]::file-selector-button {
  background: var(--nf-input-focus-border-color);
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0.5rem;
  border-radius: var(--nf-input-border-radius);
  color: #fff;
  margin-right: 1rem;
  outline: none;
  font-family: var(--nf-input-font-family);
  cursor: pointer;
}

.nice-form-group > input[type="file"]::-webkit-file-upload-button {
  background: var(--nf-input-focus-border-color);
  border: 0;
  -webkit-appearance: none;
  appearance: none;
  padding: 0.5rem;
  border-radius: var(--nf-input-border-radius);
  color: #fff;
  margin-right: 1rem;
  outline: none;
  font-family: var(--nf-input-font-family);
  cursor: pointer;
}

.nice-form-group > select {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-position: right calc(var(--nf-input-size) * 0.75) bottom 50%;
  background-repeat: no-repeat;
  background-size: var(--nf-input-size);
}

*,
:after,
:before {
  box-sizing: inherit;
}

html {
  font-size: 16px;
  box-sizing: border-box;
}

body {
  background: #f3f0e7;
  font-family: Roboto, sans-serif;
  color: #4b5563;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.demo-page {
  margin: 0 auto;
  display: -webkit-flex;
  display: flex;
  max-width: 55em;
}

.demo-page .demo-page-navigation {
  width: 18em;
  padding: 2em 1em;
}

@media only screen and (max-width: 750px) {
  .demo-page .demo-page-navigation {
    display: none;
  }
}

.demo-page .demo-page-navigation nav {
  position: -webkit-sticky;
  position: sticky;
  top: 2em;
  background: #fff;
  padding: 0.5em;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.demo-page .demo-page-navigation a {
  display: -webkit-flex;
  display: flex;
  padding: 0.75em 1em;
  text-decoration: none;
  border-radius: 0.25em;
  color: #374151;
  -webkit-align-items: center;
  align-items: center;
}

.demo-page .demo-page-navigation a:hover {
  background: #f3f4f6;
}

.demo-page .demo-page-navigation a svg {
  width: 1.25em;
  height: 1.25em;
  margin-right: 1em;
  color: #1f2937;
}

.demo-page .demo-page-content {
  padding: 2em 1em;
  max-width: 100%;
}

@media only screen and (min-width: 750px) {
  .demo-page .demo-page-content {
    width: calc(100% - 18em);
  }
}

footer {
  text-align: center;
  margin: 2.5em 0;
}

.href-target {
  position: absolute;
  top: -2em;
}

.to-repo,
.to-reset {
  display: -webkit-inline-flex;
  display: inline-flex;
  background: #24292e;
  color: #fff;
  border-radius: 5px;
  padding: 0.5em 1em;
  text-decoration: none;
  -webkit-align-items: center;
  align-items: center;
  transition: background 0.2s ease-out;
}

.to-repo:hover,
.to-reset:hover {
  background: #000;
}

.to-repo svg,
.to-reset svg {
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.75em;
}

.to-reset {
  background: #3b4ce2;
}

.to-reset:hover {
  background: #2538df;
}

section {
  background: #fff;
  padding: 2em;
  border-radius: 0.75rem;
  line-height: 1.6;
  overflow: hidden;
  margin-bottom: 2rem;
  position: relative;
  font-size: 0.875rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

section h1 {
  font-weight: 500;
  font-size: 1.25rem;
  color: #000;
  margin-bottom: 0.75rem;
}

section h1 svg {
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: -10%;
  margin-right: 0.25em;
}

section h1.package-name {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  margin-top: -0.5rem;
}

section strong {
  font-weight: 500;
  color: #000;
}

section p {
  margin: 0.5rem 0 1.5rem;
}

section p a {
  text-decoration: none;
  font-weight: 500;
  color: #3b4ce2;
}

section p:last-child {
  margin-bottom: 0;
}

section code {
  font-weight: 500;
  font-family: Consolas, monaco, monospace;
  position: relative;
  z-index: 1;
  margin: 0 2px;
  background: #f3f4f4;
  content: "";
  border-radius: 3px;
  padding: 2px 5px;
  white-space: nowrap;
}

section ul {
  margin-top: 0.5em;
  padding-left: 1em;
  list-style-type: disc;
}

details {
  background: #f1f1f1;
  margin: 2em -2em -2em;
  padding: 1.5em 2em;
}

details .gist {
  margin-top: 1.5em;
}

details .toggle-code {
  display: inline-block;
  padding: 0.5em 1em;
  border-radius: 5px;
  font-size: 0.875rem;
  background: #10b981;
  top: 1em;
  right: 1em;
  color: #fff;
  font-weight: 500;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}

details .toggle-code:hover {
  background: #0ea271;
}

details .toggle-code svg {
  display: inline-block;
  vertical-align: -15%;
  margin-right: 0.25em;
}

details summary {
  outline: none;
  list-style-type: none;
}

details summary::marker {
  display: none;
}

details summary::-webkit-details-marker {
  display: none;
}
</style>
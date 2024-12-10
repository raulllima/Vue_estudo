<template>
  <div class="mainPage">
    <EasyDataTable
      buttons-pagination
      table-class-name="CustomTable"
      header-text-direction="center"
      body-text-direction="center"
      :headers="headers"
      :items="items"
      :loading="loading"
      :search-field="searchField"
      :search-value="searchValue"
    >
      <template #loading>
        <img src="../../assets/images/loading.gif" style="width: 30%" />
      </template>

      <template #item-type_item="item">
        <label>
          <select
            @change="(e) => typeEdit(item, e.target.value)"
            :disabled="item.isReadonly"
          >
            <option
              value="Renovável"
              :selected="item.type_item === 'Renovável'"
            >
              Renovável
            </option>
            <option
              value="Não Renovável"
              :selected="item.type_item === 'Não Renovável'"
            >
              Não Renovável
            </option>
            <option
              value="Reciclável"
              :selected="item.type_item === 'Reciclável'"
            >
              Reciclável
            </option>
          </select>
        </label>
      </template>

      <template #item-descricao="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.descricao"
            @copy.prevent
            @input="(e) => updateItem(item, 'descricao', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-material="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.material"
            @copy.prevent
            @input="(e) => updateItem(item, 'material', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-compos_quimica="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.compos_quimica"
            @copy.prevent
            @input="(e) => updateItem(item, 'compos_quimica', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-quantidade="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.quantidade"
            @copy.prevent
            @input="(e) => updateItem(item, 'quantidade', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-unidade="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.unidade"
            @copy.prevent
            @input="(e) => updateItem(item, 'unidade', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-peso_unit_kg="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.peso_unit_kg"
            @copy.prevent
            @input="(e) => updateItem(item, 'peso_unit_kg', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-custo_unit="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.custo_unit"
            @copy.prevent
            @input="(e) => updateItem(item, 'custo_unit', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #item-demanda_mensal="item">
        <div
          class="input-container"
          @keydown.enter="btnEditItem(item)"
          @keydown.esc="disableEdit(item)"
          @dblclick="enableEdit(item)"
        >
          <input
            class="inputSetup"
            type="text"
            :readonly="item.isReadonly"
            :value="item.demanda_mensal"
            @copy.prevent
            @input="(e) => updateItem(item, 'demanda_mensal', e.target.value)"
          />
          <div class="underline"></div>
        </div>
      </template>

      <template #expand="item">
        <section>
          <div class="form-container part1">
            <form id="remanu-form">
              <div class="grid-container">
                <div class="grid-item header subtitle"></div>
                <div class="grid-item header">Identificação</div>
                <div class="grid-item header">Verificação</div>
                <div class="grid-item header">Acesso</div>
                <div class="grid-item header">R.Desgaste</div>
                <div class="grid-item header">Manuseio</div>

                <div class="grid-item header">Separação</div>
                <div class="grid-item header">Empilhamento</div>
                <div class="grid-item header">Segurança</div>
                <div class="grid-item header">Alinhamento</div>

                <!-- Linha de Inspeção -->
                <div class="grid-item header-col">Inspeção</div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.inspecao_identificacao === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.inspecao_identificacao === 'Sim'
                        ? 'white'
                        : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'inspecao_identificacao', e.target)
                  "
                >
                  {{ item.inspecao_identificacao }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.inspecao_verificacao === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.inspecao_verificacao === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'inspecao_verificacao', e.target)
                  "
                >
                  {{ item.inspecao_verificacao }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.inspecao_acesso === 'Sim' ? '#01700c59' : '#f8f8f8',
                    color: item.inspecao_acesso === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="(e) => changeValue(item, 'inspecao_acesso', e.target)"
                >
                  {{ item.inspecao_acesso }}
                </div>
                <div
                  class="grid-item not-selectable"
                  data-name="inspecao-desgaste"
                ></div>
                <div
                  class="grid-item not-selectable"
                  data-name="inspecao-manuseio"
                ></div>
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
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.limpeza_acesso === 'Sim' ? '#01700c59' : '#f8f8f8',
                    color: item.limpeza_acesso === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="(e) => changeValue(item, 'limpeza_acesso', e.target)"
                >
                  {{ item.limpeza_acesso }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.limpeza_rdesgaste === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.limpeza_rdesgaste === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'limpeza_rdesgaste', e.target)
                  "
                >
                  {{ item.limpeza_rdesgaste }}
                </div>
                <div
                  class="grid-item not-selectable"
                  data-name="limpeza-manuseio"
                ></div>
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

                <!-- Linha de Desmontagem -->
                <div class="grid-item header-col">Desmontagem</div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.desmontagem_identificacao === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.desmontagem_identificacao === 'Sim'
                        ? 'white'
                        : '#4b4b4b',
                  }"
                  @click="
                    (e) =>
                      changeValue(item, 'desmontagem_identificacao', e.target)
                  "
                >
                  {{ item.desmontagem_identificacao }}
                </div>
                <div
                  class="grid-item not-selectable"
                  data-name="desmontagem-verificacao"
                ></div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.desmontagem_acesso === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.desmontagem_acesso === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'desmontagem_acesso', e.target)
                  "
                >
                  {{ item.desmontagem_acesso }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.desmontagem_rdesgaste === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.desmontagem_rdesgaste === 'Sim'
                        ? 'white'
                        : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'desmontagem_rdesgaste', e.target)
                  "
                >
                  {{ item.desmontagem_rdesgaste }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.desmontagem_manuseio === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.desmontagem_manuseio === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'desmontagem_manuseio', e.target)
                  "
                >
                  {{ item.desmontagem_manuseio }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.desmontagem_separacao === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.desmontagem_separacao === 'Sim'
                        ? 'white'
                        : '#4b4b4b',
                  }"
                  data-name="desmontagem-separacao"
                  @click="
                    (e) => changeValue(item, 'desmontagem_separacao', e.target)
                  "
                >
                  {{ item.desmontagem_separacao }}
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

                <!-- Linha de Armazenagem -->
                <div class="grid-item header-col">Armazenagem</div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.armazenagem_identificacao === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.armazenagem_identificacao === 'Sim'
                        ? 'white'
                        : '#4b4b4b',
                  }"
                  @click="
                    (e) =>
                      changeValue(item, 'armazenagem_identificacao', e.target)
                  "
                >
                  {{ item.armazenagem_identificacao }}
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
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.armazenagem_manuseio === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.armazenagem_manuseio === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'armazenagem_manuseio', e.target)
                  "
                >
                  {{ item.armazenagem_manuseio }}
                </div>
                <div
                  class="grid-item not-selectable"
                  data-name="armazenagem-separacao"
                ></div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.armazenagem_empilhamento === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.armazenagem_empilhamento === 'Sim'
                        ? 'white'
                        : '#4b4b4b',
                  }"
                  data-name="armazenagem-empilhamento"
                  @click="
                    (e) =>
                      changeValue(item, 'armazenagem_empilhamento', e.target)
                  "
                >
                  {{ item.armazenagem_empilhamento }}
                </div>
                <div
                  class="grid-item not-selectable"
                  data-name="armazenagem-seguranca"
                ></div>
                <div
                  class="grid-item not-selectable"
                  data-name="armazenagem-alinhamento"
                ></div>

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
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.reprocessar_acesso === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.reprocessar_acesso === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'reprocessar_acesso', e.target)
                  "
                >
                  {{ item.reprocessar_acesso }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.reprocessar_rdesgaste === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.reprocessar_rdesgaste === 'Sim'
                        ? 'white'
                        : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'reprocessar_rdesgaste', e.target)
                  "
                >
                  {{ item.reprocessar_rdesgaste }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.reprocessar_manuseio === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.reprocessar_manuseio === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'reprocessar_manuseio', e.target)
                  "
                >
                  {{ item.reprocessar_manuseio }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.reprocessar_separacao === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.reprocessar_separacao === 'Sim'
                        ? 'white'
                        : '#4b4b4b',
                  }"
                  data-name="reprocessar-separacao"
                  @click="
                    (e) => changeValue(item, 'reprocessar_separacao', e.target)
                  "
                >
                  {{ item.reprocessar_separacao }}
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
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.remontar_acesso === 'Sim' ? '#01700c59' : '#f8f8f8',
                    color: item.remontar_acesso === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="(e) => changeValue(item, 'remontar_acesso', e.target)"
                >
                  {{ item.remontar_acesso }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.remontar_rdesgaste === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.remontar_rdesgaste === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'remontar_rdesgaste', e.target)
                  "
                >
                  {{ item.remontar_rdesgaste }}
                </div>
                <div
                  class="grid-item not-selectable"
                  data-name="remontar-manuseio"
                ></div>
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
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.remontar_seguranca === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.remontar_seguranca === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'remontar_seguranca', e.target)
                  "
                >
                  {{ item.remontar_seguranca }}
                </div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.remontar_alinhamento === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.remontar_alinhamento === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'remontar_alinhamento', e.target)
                  "
                >
                  {{ item.remontar_alinhamento }}
                </div>

                <!-- Linha de Testar -->
                <div class="grid-item header-col">Testar</div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.testar_identificacao === 'Sim'
                        ? '#01700c59'
                        : '#f8f8f8',
                    color:
                      item.testar_identificacao === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="
                    (e) => changeValue(item, 'testar_identificacao', e.target)
                  "
                >
                  {{ item.testar_identificacao }}
                </div>
                <div
                  class="grid-item not-selectable"
                  data-name="testar-verificacao"
                ></div>
                <div
                  class="grid-item selectable"
                  :class="{ itemDisabled: item.isReadonly }"
                  :style="{
                    'background-color':
                      item.testar_acesso === 'Sim' ? '#01700c59' : '#f8f8f8',
                    color: item.testar_acesso === 'Sim' ? 'white' : '#4b4b4b',
                  }"
                  @click="(e) => changeValue(item, 'testar_acesso', e.target)"
                >
                  {{ item.testar_acesso }}
                </div>
                <div
                  class="grid-item not-selectable"
                  data-name="testar-desgaste"
                ></div>
                <div
                  class="grid-item not-selectable"
                  data-name="testar-manuseio"
                ></div>
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
      </template>

      <template #item-operation="item">
        <div class="operation-wrapper" style="margin-top: 2px">
          <img
            src="../../assets/images/delete.png"
            class="operation-icon"
            style="width: 18px; margin-right: 2.5px; cursor: pointer"
            @click="btnDeleteItem(item)"
          />
          <img
            :src="
              item.isReadonly
                ? require('../../assets/images/edit.png')
                : require('../../assets/images/save.png')
            "
            class="operation-icon"
            style="width: 18px; margin-left: 2.5px; cursor: pointer"
            @click="btnEditItem(item)"
          />
        </div>
      </template>

      <template #empty-message>
        <span style="font-size: 14px; color: #c1cad4">
          Nenhum item cadastrado.
        </span>
      </template>
    </EasyDataTable>
    <Notifications />
  </div>
</template>

<script>
import api from "../../api/api";
import { nextTick, ref, watch, toRaw } from "vue";
import { useRouter } from "vue-router";
import BtnBack from "@/components/Nav/BtnBack.vue";
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification();

const headers = [
  { text: "ID", value: "id" },
  { text: "TIPO DO ITEM", value: "type_item" },
  { text: "DESCRICAO", value: "descricao" },
  { text: "MATERIAL", value: "material" },
  { text: "COMPOS. QUIMICA", value: "compos_quimica" },
  { text: "QUANTIDADE", value: "quantidade" },
  { text: "UNIDADE", value: "unidade" },
  { text: "PESO UNIT. KG", value: "peso_unit_kg" },
  { text: "CUSTO UNITÁRIO", value: "custo_unit" },
  { text: "DEMANDA MENSAL", value: "demanda_mensal" },
  { text: "AÇÃO", value: "operation" },
];

const loading = ref(true);
const items = ref([]);
const itemsToCompare = ref([]);
const searchField = ref("descricao");
const searchValue = ref("");

export default {
  name: "Itens",
  setup() {
    const router = useRouter();

    const changeValue = (item, key, newValue) => {
      items.value = items.value.map((i) =>
        i.id === item.id
          ? {
              ...i,
              [key]: newValue.innerText === "Não" ? "Sim" : "Não",
            }
          : i
      );
    };

    const cyclingEdit = (item, ref, newValue) => {
      var up = "";
      var down = "";

      if (ref === "up" && newValue === "Não") {
        down = "Sim";
        up = "Não";
      } else {
        down = "Não";
        up = "Sim";
      }

      items.value = items.value.map((i) =>
        i.id === item.id
          ? {
              ...i,
              up_cycling: up,
              down_cycling: down,
            }
          : i
      );
    };

    const updateItem = (item, key, value) => {
      item[key] = value;

      const index = items.value.findIndex((i) => i.id === item.id);

      if (index !== -1) {
        items.value.splice(index, 1, { ...item });
      }
    };

    const btnDeleteItem = (val) => {
      api
        .delete("/itens/C3/deleteItem/" + val.id)
        .then(() => {
          items.value = items.value.filter((item) => item.id !== val.id);
          notify({
            title: "Notificação",
            text: "Item deletado com sucesso!",
            type: "success", // Tipos possíveis: 'success', 'error', 'warning', etc.
            duration: 3000,
            pauseOnHover: true,
            closeOnClick: true,
          });
        })
        .catch(() => {
          notify({
            title: "Notificação",
            text: "Erro ao deletar o item! " + err,
            type: "error", // Tipos possíveis: 'success', 'error', 'warning', etc.
            duration: 10000,
            pauseOnHover: true,
            closeOnClick: false,
          });
        });
    };

    const btnEditItem = (item) => {
      items.value = items.value.map((i) =>
        i.id === item.id
          ? {
              ...i,
              isReadonly: !i.isReadonly,
            }
          : i
      );

      const itemIndex = items.value.findIndex((i) => i.id === item.id);

      const { key: keyOne, isReadonly: isReadonlyOne, ...ObjectOne } = item;
      const {
        key: keyTwo,
        isReadonly: isReadonlyTwo,
        ...ObjectTwo
      } = toRaw(itemsToCompare.value)[itemIndex];

      const diffJson = JSON.stringify(ObjectOne) === JSON.stringify(ObjectTwo);

      if (!item.isReadonly && !diffJson) {
        api
          .put("/itens/C3/editItem", {
            data: item,
          })
          .then(() => {
            notify({
              title: "Notificação",
              text: "Item atualizado com sucesso!",
              type: "success", // Tipos possíveis: 'success', 'error', 'warning', etc.
              duration: 3000,
              pauseOnHover: true,
              closeOnClick: true,
            });
          })
          .catch((err) => {
            notify({
              title: "Notificação",
              text: "Erro ao atualizar o item! " + err,
              type: "error", // Tipos possíveis: 'success', 'error', 'warning', etc.
              duration: 10000,
              pauseOnHover: true,
              closeOnClick: false,
            });
          });
      }
    };

    const enableEdit = (item) => {
      items.value = items.value.map((i) =>
        i.id === item.id
          ? {
              ...i,
              isReadonly: false,
            }
          : i
      );
    };

    const disableEdit = (item) => {
      items.value = items.value.map((i) =>
        i.id === item.id
          ? {
              ...i,
              isReadonly: true,
            }
          : i
      );
    };

    const backPage = () => {
      router.go(-1);
    };

    return {
      backPage,
      items,
      headers,
      loading,
      searchField,
      searchValue,
      updateItem,
      btnDeleteItem,
      btnEditItem,
      enableEdit,
      disableEdit,
      changeValue,
      cyclingEdit,
    };
  },
  mounted() {
    api.get("/itens/C3/getAllItems").then((response) => {
      items.value = response.data.map((i) => ({
        ...i,
        isReadonly: true,
      }));
      itemsToCompare.value = response.data.map((i) => ({
        ...i,
        isReadonly: true,
      }));
      loading.value = false;
    });
  },
  components: {
    BtnBack,
  },
};
</script>

<style scoped>
.itemDisabled {
  pointer-events: none;
  cursor: not-allowed;
}

.mainPage {
  margin-top: 0.5%;
  margin-right: 1%;
  font-family: Avenir, AvenirLocal, Helvetica, Arial, sans-serif;
}

.CustomTable {
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
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #4b4b4b; /* Preto no hover */
  --easy-table-body-row-hover-background-color: transparent; /* Leve contraste no hover */

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

.SubTable {
  --da0d4328: 60px !important;
  --easy-table-border: 1px solid #ffffff;
  --easy-table-row-border: 1px solid #ffffff;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 2px;
  --easy-table-header-font-color: #000000; /* Preto para o texto do cabeçalho */
  --easy-table-header-background-color: #ffffff; /* Fundo branco */
  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #4b4b4b; /* Preto para o texto */
  --easy-table-body-even-row-background-color: #ffffff; /* Fundo branco nas linhas pares */

  --easy-table-body-row-font-color: y; /* Preto para o texto nas linhas ímpares */
  --easy-table-body-row-background-color: #ffffff; /* Fundo branco nas linhas ímpares */
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #4b4b4b; /* Preto no hover */
  --easy-table-body-row-hover-background-color: #4b4b4b09; /* Leve contraste no hover */

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
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  font-size: 11px;
}

.form-container.part2 .grid-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  font-size: 11px;
}

.form-container .grid-item {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  max-width: 100px;
  text-overflow: ellipsis;
  font-size: 11.5px;
}

.grid-item {
  margin: none;
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

* {
  box-sizing: border-box;
  letter-spacing: 0.05rem;
  outline: 0 none;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  padding: 30px;
}

label {
  position: relative;
  display: inline-block;
}

label:before {
  content: "";
  height: 31px; /* $height - 5 */
  position: absolute;
  right: 7px;
  top: 3px;
  width: 22px;
  background: #fff; /* for Firefox in Android */
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  pointer-events: none;
  display: block;
}

label:after {
  content: " ";
  position: absolute;
  right: 15px;
  top: 46%;
  margin-top: -3px;
  z-index: 2;
  pointer-events: none;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6.9px 4px 0 4px;
  border-color: #aaa transparent transparent transparent;
  pointer-events: none;
}

label select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0 30px 0 10px;
  border: none;
  text-align: center;
  border-radius: 3px;
  line-height: 36px; /* $height */
  height: 36px; /* $height */
  background: #fff;
  margin: 0 5px 5px 0;
  font-family: Avenir, AvenirLocal, Helvetica, Arial, sans-serif;
  color: #4b4b4b;
}

select::-ms-expand {
  display: none;
}

.input-container {
  position: relative;
  width: 100%;
}

input[type="text"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  color: #4b4b4b;
  text-align: center;
  font-size: 14px;
  appearance: none;
  border: none;
  box-shadow: 0 0 0 0;
  background: none;
  background-color: transparent;
  width: 100%;
  padding: 5px 0;
  outline: none;
  font-family: Avenir, AvenirLocal, Helvetica, Arial, sans-serif;
}

input[type="text"]::selection {
  background: transparent;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;

  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type="text"]:focus ~ .label,
.input-container input[type="text"]:valid ~ .label {
  font-size: 16px;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #a1caff;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[readonly] {
  pointer-events: none;
}

.input-container input[readonly]:focus ~ .underline {
  transform: scaleX(0);
}

.input-container input[type="text"]:focus:not([readonly]) ~ .underline {
  transform: scaleX(1);
}
</style>
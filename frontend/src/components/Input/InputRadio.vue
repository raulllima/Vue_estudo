<template>
  <div class="containerInputRadio">
    <input
      :id="name + '-sim'"
      type="radio"
      value="sim"
      v-model="defaultValue"
      @change="updateValue"
    />
    <label :for="name + '-sim'" class="labelQuestionYes labelQuestion">
      <span>Sim</span>
    </label>

    <input
      :id="name + '-nao'"
      type="radio"
      value="nao"
      v-model="defaultValue"
      @change="updateValue"
    />
    <label :for="name + '-nao'" class="labelQuestionNo labelQuestion">
      <span>Não</span>
    </label>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "InputRadio",
  props: {
    modelValue: {
      required: false,
      type: String,
      default: "",
    },
    name: {
      required: false,
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const defaultValue = ref(props.modelValue);

    watch(() => {
      props.modelValue,
        (newValue) => {
          defaultValue.value = newValue;
        };
    });

    const updateValue = () =>{ 
      emit('update:modelValue', defaultValue.value)
    }

    return {
      defaultValue,
      updateValue
    };
  },
};
</script>

<style>
.containerInputRadio {
  background: white;
  width: 8vw;
  height: 3.5vh;
  position: relative;
  border-radius: 2px;
  overflow: hidden;
}

.containerInputRadio input[type="radio"] {
  display: none;
}

.labelQuestion {
  display: inline-block;
  height: 100%;
  width: 50%;
  cursor: pointer;
  align-items: center;
  text-align: center;
  line-height: 3.5vh;
  transition: background 0.7s, color 0.7s;
  background: white;
}

input[type="radio"]:checked + .labelQuestionYes {
  background: green;
  color: white;
}

input[type="radio"]:checked + .labelQuestionNo {
  background: red;
  color: white;
}
</style>

<template>
  <div class="containerInputRadio">
    <div v-for="(option, i) in options" :key="i" >
      <input
        type="radio"
        :id="name + (i + 1)"
        :value="option.value"
        v-model="defaultValue"
        @change="updateValue"
      />
      <label
        :for="name + (i + 1)"
        :class="'labelQuestion' + option.value"
        class="labelQuestion"
      >
        <span> {{ option.value }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewInputRadio",
  props: {
    name: {
      required: true,
      type: String,
      default: "",
    },
    value: {
      required: false,
      type: String,
      default: "",
    },
    options: {
      required: true,
      type: Array,
      default: () => [],
    },
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

input[type="radio"]:checked + .labelQuestionSim {
  background: green;
  color: white;
}

input[type="radio"]:checked + .labelQuestionNao {
  background: red;
  color: white;
}
</style>

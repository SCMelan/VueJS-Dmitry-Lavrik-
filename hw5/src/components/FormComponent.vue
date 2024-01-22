<template>
  <div class="wrapper">
    <div class="sample">
      <form v-if="!isActiveTable">
        <div class="progress">
          <div class="progress-bar"></div>
        </div>
        <div>
          <div v-for="(obj,index) in this.$store.state.formInformation" :key="obj.name">
            <InputComponent @checkForm="checkForm" :information="obj" :idx="index" />
          </div>
        </div>
        <button :disabled="this.$store.state.isValidForm ? false : true" @click.prevent="changeTab">
          Send Data
        </button>
      </form>
      <table v-else>
        <tr v-for="block in this.$store.state.formInformation" :key="block.name">
          <td>{{ block.value }}</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import InputComponent from "./InputComponent.vue";

export default {
  name: 'FormComponent',
  components: {
    InputComponent
  },
  data() {
    return {
      isActiveTable: false,
    }
  },
  methods: {
    changeTab() {
      this.isActiveTable = !this.isActiveTable
    },
    checkForm() {
      if (this.$store.state.formInformation.every(itemForm=> itemForm.isValid === true)) {
        this.$store.commit('changeValid')
      }
    },
  },

}
</script>
  
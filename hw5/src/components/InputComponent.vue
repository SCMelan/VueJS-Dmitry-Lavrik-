<template>
    <div>
        <label>{{ information.name }}</label>
        <input @input="changeValue(inputValue, idx), checkValid(idx),checkForm()" v-model="inputValue" type="text">
        <p>{{ information.isValid }}</p>
    </div>
</template>
  
<script>

export default {
    name: 'InputComponent',
    props: {
        information: {
            type: Object,
        },
        idx: {
            type: Number,
        }
    },
    data() {
        return {
            inputValue: '',
        }
    },
    methods: {
        checkForm() {
            this.$emit('checkForm')
        },
        changeValue(newValue, idx) {
            this.$store.commit('changeProp', { newValue, idx })
        },
        checkValid(index) {
            if (this.information.value.length > 0) {
                if (this.information.pattern.test(this.information.value)) {
                    this.$store.commit('checkValid', {index, bool:true})
                }
            }
        },
    },
}
</script>
  
<style></style>
  
<template>
    <div>
        <h5>{{ information.name }}</h5>
        <input @input="changeValue({keyItem, inputValue})" v-model="inputValue" type="text">
    </div>
</template>
  
<script>
import {mapActions} from "vuex";

export default {
    name: 'InputComponent',
    props: {
        information: {
            type: Object,
        },
        keyItem: {
            type: String,
        }
    },
    data() {
        return {
            inputValue: '',
        }
    },
    methods: {
        ...mapActions('checkout', {
            changeValue: 'change',
        })
    },
}
</script>
  
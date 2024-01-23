<template>
    <div>
        <h1>Order now</h1>
        <hr>
        <form>
            <InputComponent v-for="(infoinput, keyItem) in userInformation" :information="infoinput" :key="keyItem"
                :keyItem="keyItem" />
        </form>
        <button class="btn btn-success" @click.prevent="sendForm">Send Order</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import InputComponent from "./InputComponent.vue";
export default {
    data() {
        return {
        };
    },
    components: { InputComponent },
    computed: {
        ...mapGetters('checkout', {
            userInformation: 'userInformation'
        }),
        ...mapGetters('cart', {
            productsInCart: 'products'
        }),
        ...mapGetters('products', {
            productsAll: 'items'
        }),
    },
    methods: {
        sendForm() {
            const userInfo = []
            const userItems = []
            for (let itemKey in this.userInformation) {
                userInfo.push(this.userInformation[itemKey].value)
            }
            for (let productItem in this.productsInCart) {
                userItems.push(this.$store.getters['products/item'](this.productsInCart[productItem]))
            }
            setTimeout(()=>{
                alert(`Заказ на - ${userInfo} успешно отправллен`)
            }, 1500)
            console.log(userInfo,userItems);
        },
    },
}
</script>
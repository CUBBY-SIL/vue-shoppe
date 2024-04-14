<template>
    
    <transition name="showCart">
        <div class="wrapper-cart" v-show="statusCart">
            <div class="preview-cart">
                <h3>Shopping Bag</h3>
                <div class="preview-cart-list">
                    {{ length }} items
                    <app-order-item v-for="item, i in itemsDetailed" :key="i" :itemInfo="item"></app-order-item>
                </div>
                <div class="preview-footer">
                    <div class="preview-footer-title">
                        Subtotal ({{ length }} items) - {{ total }}$
                    </div>
                    <router-link :to="{name: 'cart'}" :onClick="closeCart">
                        <app-main-btn :text="'view cart'"/>
                    </router-link>
                </div>
                <div class="btn-close" :onClick="closeCart">
                        <fa-icon :icon="['fas', 'xmark']"></fa-icon>
                </div>
            </div>
            <div class="backdrop" @click="closeCart"></div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import AppMainBtn from '../UI/MainButton.vue';
import AppOrderItem from './OrderItem.vue';

    export default{
        name: 'Preview-Cart',
        components:{
            AppMainBtn,
            AppOrderItem
        },
        computed:{
            ...mapGetters('cart', [ 'itemsDetailed', 'total', 'length', 'statusCart']),
        },
        methods:{
            ...mapActions('cart', ['changeVisibility']),
            closeCart(){
                this.$store.dispatch('cart/changeVisibility');
            },
            clickBackdrop(e){
                console.log(e)
            }
        }
    
    }
</script>

<style scoped>
.showCart-enter-active{
    animation: showIn 0.6s;
}
.showCart-leave-active{
    animation: showOut 0.6s;
}

@keyframes showIn{
    from{transform: translateX(100%);}
    to{transform: translateX(0);}
}
@keyframes showOut{
    from{transform: translateX(0);}
    to{transform: translateX(100%);}
}
</style>
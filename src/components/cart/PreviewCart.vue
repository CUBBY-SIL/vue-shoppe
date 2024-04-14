<template>
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
            <router-link :to="{name: 'cart'}">
                <app-main-btn :text="'view cart'"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AppMainBtn from '../UI/MainButton.vue';
import AppOrderItem from './OrderItem.vue';

    export default{
        name: 'Preview-Cart',
        components:{
            AppMainBtn,
            AppOrderItem
        },
        computed:{
        ...mapGetters('cart', [ 'itemsDetailed', 'total', 'length'])
    }
    }
</script>

<template>
    <section class="cart-section">
        <div class="cart-empty" v-if="!length">
            <div class="cart-section__title">
                <h3>Your cart is empty</h3>
            </div>
        </div>
        <div v-else class="cart-fully">
            <div class="cart-section__title">
                <h3>Shopping Cart</h3>
            </div>
            <div class="container-order">
                <div class="order-products">
                    <app-order-item v-for="item, i in itemsDetailed" :key="i" :itemInfo="item"></app-order-item>
                </div>
                <div class="order-info">

                    <div class="order-info__title">
                        Cart totals
                    </div>

                    <div class="order-info__paragraph">
                        <div class="info-paragraph__item">
                            <div class="paragraph-item__title">
                                Total
                            </div>
                            <div class="paragraph-item__info">
                                $ {{ total }},00
                            </div>
                        </div>
                    </div>

                    <router-link :to="{name: 'checkout'}"><app-main-btn :text="'proceed to checkout'"></app-main-btn></router-link>
                </div>
                
            </div>
        </div>
        
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AppMainBtn from '../UI/MainButton.vue'
import AppOrderItem from '../cart/OrderItem.vue'

export default {
    name: 'CartPage',
    components:{
        AppMainBtn,
        AppOrderItem
    },
    computed:{
        ...mapGetters('cart', [ 'itemsDetailed', 'total', 'length'])
    }
}
</script>
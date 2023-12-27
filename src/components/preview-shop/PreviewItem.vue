<template>
    <app-popup-add-to-cart :showPopup="popupShow"></app-popup-add-to-cart>
    <div class="preview-item">
        <div class="preview-item__img">
            <router-link :to="{name: 'product', params: {id: productId}}">
                <img :src="productImg">
            </router-link>
            <button v-if="!inCart(productId)" class="preview-btn-link" @click="addToCart({id: productId})">
                Add to cart
            </button>
            <button v-else class="preview-btn-link" @click="remove(productId)">
                Remove from cart
            </button>
        </div>
        <div class="preview-item__title">
            <strong>{{ productTitle }}</strong>
        </div>
        <div class="preview-item__price">
            $ {{ productPrice }}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppPopupAddToCart from '../PopupAddToCart.vue'
export default {
    name: 'PreviewItem',
    components:{
        AppPopupAddToCart
    },
    props:{
        productTitle: {
            type: String,
            requred: true
        },
        productPrice: {
            type: Number,
            requred: true
        },
        productImg: {
            type: String,
        },
        productId: {
            type: Number,
            requred: true
        }
    },
    data(){
        return{
            popupShow: false
        }
    },
    methods:{
		...mapActions('cart', [ 'add', 'remove' ]),
        changeShowPopup(){
            this.popupShow = !this.popupShow;

            setTimeout(() => {
                this.popupShow = !this.popupShow
            },8000)
        },
        addToCart(el){
            this.changeShowPopup();

            this.$store.dispatch('cart/add', {id: el.id});
        }
	},
    computed:{
        ...mapGetters('cart', ['inCart'])
    }
}
</script>
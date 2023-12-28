<template>
    <div class="preview-list shop-page">
        <app-product-item 
            v-for="product in productList" 
            :key="product.id"
            :productImg="product.images[0]"
            :productTitle="product.title"
            :productPrice="product.price"
            :productId="product.id"
        />
    </div>
</template>

<script>
import AppProductItem from '../preview-shop/PreviewItem.vue';
import {mapGetters} from 'vuex';

export default {
    components:{
        AppProductItem
    },
    computed:{
        ...mapGetters('products', { productList: 'all'}),
    }
}
</script>

<style>
.shop-page{
    padding-top: 120px;
}
</style>
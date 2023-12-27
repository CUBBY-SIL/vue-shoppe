<template>
    <div class="preview-title">
        <div class="preview-title__text">
            <p>Shop The Latest</p>
        </div>
        <div class="preview-link">
            <a href="#">View ALL</a>
        </div>
    </div>
    <div class="preview-list">
        <app-preview-item 
            v-for="product in productList.slice(0,6)" 
            :key="product.id"
            :productImg="product.images[0]"
            :productTitle="product.title"
            :productPrice="product.price"
            :productId="product.id"
        />
    </div>
</template>

<script>
import AppPreviewItem from './PreviewItem.vue'
import {mapGetters} from 'vuex';
export default {
  components: { AppPreviewItem },
    name: 'PreviewShop',
    computed:{
        ...mapGetters('products', { productList: 'all'}),
    }
}
</script>

<style>

</style>
<template>
    <app-banner></app-banner>
    <app-preview-shop></app-preview-shop>
</template>

<script>
import AppBanner from '../Banner.vue'
import AppPreviewShop from '../preview-shop/PreviewShop.vue'

export default {
    name: 'HomePage',
    components: {
    AppBanner,
    AppPreviewShop
  }
}
</script>
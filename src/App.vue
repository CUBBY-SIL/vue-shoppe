<template>
    <div class="layout">
      <app-header />
      <router-view />
      <app-preview-cart />
      <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/header/Header.vue'
import AppFooter from './components/footer/Footer.vue'
import AppPreviewCart from './components/cart/PreviewCart.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppPreviewCart
  }
}
</script>

<style lang="scss">
.layout{
  max-width: 1268px;
  padding: 0px 20px;
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>

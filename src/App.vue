<template>
    <div class="layout">
      <app-header />
      <router-view />
      <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/header/Header.vue'
import AppFooter from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
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

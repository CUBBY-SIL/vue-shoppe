<template>
    <div class="e404-wrapper">
        <div class="container-e404">
            <div class="e404-title">
                404 error
            </div>
            <div class="e404-text">
                This page not found;<br>
                back to home and start again
            </div>
            <router-link :to="{name: 'home'}">
                <app-main-btn :text="'homepage'"></app-main-btn>
            </router-link>
        </div>
    </div>
</template>

<script>
import AppMainBtn from './UI/MainButton.vue'
export default {
    name: 'E404',
    components:{
        AppMainBtn
   }
}
</script>

<style>

</style>
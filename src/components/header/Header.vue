<template>
    <header class="header">
        <div>
            <router-link :to="{name: 'home'}"><img alt="logo" src="../../assets/img/SHOPPE_logo.png"></router-link>
        </div>
        <nav class="navigation">
            <div class="container-menu-lg-screen">
                <app-navigation-bar
                    :menuList="menuDesktop" 
                />
                <div class="tool-bar">
                    <div class="tool-bar__icons">
                        <a><fa-icon :icon="['fas', 'magnifying-glass']"></fa-icon></a>
                    </div>
                    <router-link :to="{name: 'cart'}" class="tool-bar__icons">
                        <fa-icon :icon="['fas', 'cart-shopping']"></fa-icon>
                    </router-link>
                    <div class="tool-bar__icons">
                        <a><fa-icon :icon="['fas', 'user']"></fa-icon></a>
                    </div>
                </div>
            </div> 
            <div class="container-menu-sm-screen">
                <transition name="fade-menu" v-show="show">
                    <app-navigation-bar 
                    :menuList="menuMobile" 
                    @changeShowMenu="show = !show"
                />
                </transition>
                <div class="tool-bar">
                    <router-link :to="{name: 'cart'}" class="tool-bar__icons">
                        <fa-icon :icon="['fas', 'cart-shopping']"></fa-icon>
                    </router-link>
                    <transition name="change" mode="out-in">
                        <div v-if="!show" @click="show = !show" class="tool-bar__icons">
                            <fa-icon :icon="['fas', 'bars']"></fa-icon>
                        </div>
                        <div v-else @click="show = !show" class="tool-bar__icons">
                            <fa-icon :icon="['fas', 'xmark']"></fa-icon>
                        </div>
                    </transition>
                </div>
            </div>  
        </nav>
    </header>
</template>

<script>
import AppNavigationBar from './NavigationBar.vue'

export default {
    name: 'Header',
    components: {
        AppNavigationBar,
    },
    data(){
        return{
            menuDesktop:[
                {
                    text: 'Shop',
                    link: 'catalog'
                },
                {
                    text: 'Blog',
                    link: 'home'
                },
                {
                    text: 'Our Story',
                    link: 'about'
                }
            ],
            menuMobile:[
                {
                    text: 'Home',
                    link: 'home'
                },
                {
                    text: 'Shop',
                    link: 'catalog'
                },
                {
                    text: 'About',
                    link: 'about'
                },
                {
                    text: 'Blog',
                    link: 'home'
                },
                {
                    text: 'Help',
                    link: 'home'
                },
                {
                    text: 'Contact',
                    link: 'contact'
                },
                {
                    text: 'Login',
                    link: 'home'
                }
            ],
            show: false,
        }
    }
}
</script>

<style>
.change-enter-active{
    animation: iconIn 0.3s;
}
.change-leave-active{
    animation: iconOut 0.3s;
}
@keyframes iconIn{
    from{transform: rotateY(-90deg);}
    to{transform: rotateY(0deg);}
}
@keyframes iconOut{
    from{transform: rotateY(0deg);}
    to{transform: rotateY(90deg);}
}

.fade-menu-enter-active{
    animation: menuIn 0.6s ease;
    
}
.fade-menu-leave-active{
    animation: menuOut 0.6s ease; 
}
@keyframes menuIn{
    from{transform: rotateY(-90deg);}
    to{transform: rotateY(0deg);}
}
@keyframes menuOut{
    from{transform: rotateY(0deg);}
    to{transform: rotateY(90deg);}
}
</style>
  
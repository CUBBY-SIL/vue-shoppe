<template>
    <ul class="navigation-list">
        <li v-for="item, i in menuList" :key="i">
            <router-link :to="{name: `${item.link}`}" @click="hideMenu()">{{item.text}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'NavigationBar',
    props:{
        menuList: {
            type: Array,
            required: true
        }
    },
    methods:{
        hideMenu(){
            this.$emit('changeShowMenu')
        }
    }
}
</script>
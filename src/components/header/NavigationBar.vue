<template>
    <ul class="navigation-list">
        <li v-for="item, i in menuList" :key="i">
            <a href="#"> {{ item.text }}</a>
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
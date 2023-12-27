<template>
    <button class="main-btn" @click="action">
        {{text}}
    </button>
</template>
  
<script>
export default {
    props:{
        text:{
            type: String,
            required: true
        }
    },
    methods:{
        action(){
            this.$emit('actionClick');
        }
    }
}
</script>
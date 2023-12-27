<template>
    <div class="btn-counter">
        <button @click="decrease">-</button>
        <div class="container-count">{{ count }}</div>
        <button @click="increase">+</button>
    </div>
</template>

<script>
export default {
    props:{
        count:{
            type: Number,
            required: true
        }
    },
    methods:{
        increase(){
            this.$emit('changeCnt', '+')
        },
        decrease(){
            this.$emit('changeCnt', '-')
        }
    }
}
</script>
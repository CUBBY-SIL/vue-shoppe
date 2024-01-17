<template>
    <div class="input-container">
        <input
            :placeholder="placeholderText" 
            :value="newValueInput"
            :type="inputType"
            @input="onInput"
        >
    </div>
</template>

<script>
export default {
    name: 'MyInputBase',
    props:{
        placeholderText: { type: String, required: true },
        inputType: {type: String}
    },
    data (){
            return{
                newValueInput: ''
            }
        },
        methods:{
            onInput(e){
                this.newValueInput = e.target.value
                this.$emit('updated', e.target.value)
            }

        },
}
</script>

<style>
input{
    width: 100%;
    border-bottom: 1px solid #D8D8D8;
    padding-bottom: 10px;
    margin-bottom: 37px;
}
</style>
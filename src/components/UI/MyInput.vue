<template>
    <div class="input-container">
        <label>
            <transition name="icon" v-if="statusActive" mode="out-in" appear appear-active-class="icon-appear">
                <fa-icon :key="statusValid" :icon="iconValid"></fa-icon>
            </transition>
        </label>
        <input 
            :placeholder="placeholderText" 
            :value="newValueInput"
            @input="onInput"
        >
    </div>
</template>

<script>
export default {
    name: 'MyInput',
    emits: ["updated"],
    props:{
        placeholderText: { type: String, required: true },
        statusActive: { type: Boolean, required: true},
        statusValid: { type: Boolean, required: true},
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
        computed:{
            iconValid(){
                return this.statusValid ? 'check-circle' : 'exclamation-circle'
            },
        },
}
</script>

<style>
.input-container{
    position: relative;
}
.input-container label{
    position: absolute;
    top: -25px;
    left: 0;
}
.icon-enter-active{
    animation: iconIn 0.5s;
 }
 .icon-leave-active{
    animation: iconOut 0.5s;
 }
 .icon-appear{
    animation: iconAppear 0.5s;
 }
 @keyframes iconIn{
    from {transform: rotateX(-90deg);}
    to {transform: rotateX(0);}
 }
 @keyframes iconOut{
    from {transform: rotateX(0);}
    to {transform: rotateX(90deg);}
 }
 @keyframes iconAppear{
    from {opacity: 0;transform: translateX(-10px);}
    to {opacity: 1;transform: translateX(0);}
 }
</style>
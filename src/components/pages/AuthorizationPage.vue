<template>
    <section class="section-authorization">
        <div class="authorization-title">
            <h4>My account</h4>
        </div>
        <div class="authorization-btns">
            <app-main-btn 
                :class="{'active-auth-btn': currentForm === 'sign in'}" 
                :text="'sign in'"
                @click="changeForm($event)"
            />
            <app-main-btn 
                :class="{'active-auth-btn': currentForm === 'Register'}" 
                :text="'Register'" 
                @click="changeForm($event)"
            />
        </div>
        <div class="authorization-form">
            <transition name="change-form" mode="out-in">
                <div v-if="currentForm === 'sign in'">
                    <app-my-input-base 
                        v-for="field, i in loginInfo"
                        :key="i"
                        :placeholderText="field.title" 
                        :inputType="field.typeInpt"
                    />
                </div>
                <div v-else class="reg-form">
                    <app-my-input-base 
                        v-for="field, i in regInfo"
                        :key="i"
                        :placeholderText="field.title" 
                        :inputType="field.typeInpt"
                    />
                </div>
            </transition>
        </div>
        <app-main-btn :text="'sign in'"></app-main-btn>
    </section>
</template>

<script>
import AppMainBtn from '../UI/MainButton.vue'
import AppMyInputBase from '../UI/MyInputBase.vue'

export default {
    name:'AuthorizationPage',
    components:{
        AppMainBtn,
        AppMyInputBase
    },
    data(){
        return{
            currentForm: 'sign in',
            loginShow: true,
            regShow: false,
            loginInfo:[
                {
                    title: 'Email',
                    typeInpt: 'text',
                    value: '',
                    pattern: ''
                },
                {
                    title: 'Password',
                    typeInpt: 'password',
                    value: '',
                    pattern: ''
                }
            ],
            regInfo:[
                {
                    title: 'Email',
                    typeInpt: 'text',
                    value: '',
                    pattern: ''
                },
                {
                    title: 'Password',
                    typeInpt: 'password',
                    value: '',
                    pattern: ''
                },
                {
                    title: 'Repeat password',
                    typeInpt: 'password',
                    value: '',
                    pattern: ''
                }
            ]
        }
    },
    methods:{
        changeForm(e){
            this.currentForm = e.target.innerHTML
        }
    },
    
}
</script>

<style>
.change-form-enter-active{
    animation: changeIn 0.4s;
}
.change-form-leave-active{
    animation: changeOut 0.4s;
}

@keyframes changeIn{
    from{transform: translateX(-100%);}
    to{transform: translateX(0);}
}
@keyframes changeOut{
    from{transform: translateX(0);}
    to{transform: translateX(100%);}
}
</style>
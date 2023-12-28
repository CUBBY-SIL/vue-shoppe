<template>
    <section class="section-contact">
        <div class="contact-wrapper">
            <div class="contact-title">
                <h3>Contact Us</h3>
                <p>
                    Say Hello send us your thoughts about our products or share<br>
                    your ideas with our Team!
                </p>
            </div>
            <div class="container-inputs">
                <app-my-input-base 
                    v-for="field, i in messageFields"
                    :key="i"
                    :placeholderText="field.title"
                />
            </div>
            <app-my-input-base :placeholderText="'Message'" />
            <app-main-btn :text="'send'"></app-main-btn>
        </div>
        
    </section>
</template>

<script>
import AppMainBtn from '../UI/MainButton.vue'
import AppMyInputBase from '../UI/MyInputBase.vue'

export default {
    name:'ContactPage',
    components:{
        AppMainBtn,
        AppMyInputBase
    },
    data(){
        return{
            messageFields:[
                {
                    title: 'First name',
                    value: '',
                    pattern: ''
                },
                {
                    title: 'Last name',
                    value: '',
                    pattern: ''
                },
                {
                    title: 'Email',
                    value: '',
                    pattern: ''
                },
                {
                    title: 'Subject',
                    value: '',
                    pattern: ''
                },
            ],
            messageText: ''
        }
    }
}
</script>
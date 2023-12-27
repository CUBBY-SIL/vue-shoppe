<template>
    <footer class="footer-section">
        <div class="footer-section__item">
            <div class="footer-links">
                <app-footer-link
                    v-for="link, i in footerLinks"
                    :key="i"
                    :footerLink="link"
                >
                {{ link }}
                </app-footer-link>
            </div>
            <input placeholder="Give an email, get the newsletter">
        </div>
        <div class="footer-section__item">
            <div class="footer-privacy">
                <p>© 2021 Shelly. Terms of use and privacy policy.</p>
            </div>
            <div class="footer-social">
                <a href="#">
                    <fa-icon :icon="['fab', 'linkedin-in']"></fa-icon>
                </a>
                <a href="#">
                    <fa-icon :icon="['fab', 'facebook-f']"></fa-icon>
                </a>
                <a href="#">
                    <fa-icon :icon="['fab', 'instagram']"></fa-icon>
                </a>
                <a href="#">
                    <fa-icon :icon="['fab', 'twitter']"></fa-icon>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
import AppFooterLink from './FooterLink.vue'
export default {
    name: 'Footer',
    components:{
        AppFooterLink
    },
    data(){
        return{
            footerLinks:[
                {
                    text: 'CONTACT',
                    link: 'contact'
                },
                {
                    text: 'TERMS OF SERVICES',
                    link: 'home'
                },
                {
                    text: 'SHIPPING AND RETURNS',
                    link: 'home'
                }
            ]
        }
    }
}
</script>

<style>

</style>
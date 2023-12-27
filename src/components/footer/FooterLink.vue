<template>
    <div class="footer-links__item">
        <router-link :to="{name: `${footerLink.link}`}">{{footerLink.text}}</router-link>
    </div>
</template>

<script>
export default {
    name: 'FooterLink',
    props:{
        footerLink: {
            required: true
        }
    }
}
</script>
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faMagnifyingGlass, faUser, faBars, faXmark, faCircleCheck, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

import './assets/style/main.scss'

library.add(faShoppingCart);
library.add(faMagnifyingGlass)
library.add(faUser)
library.add(faBars)
library.add(faXmark)
library.add(faCircleCheck)
library.add(faExclamationCircle)
library.add(faLinkedinIn)
library.add(faInstagram)
library.add(faFacebookF)
library.add(faTwitter)

store.dispatch('products/load').then(() =>{
    createApp(App)
    .use(store)
    .use(router)
    .component('fa-icon', FontAwesomeIcon)
    .mount('#app');
})

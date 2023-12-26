import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faMagnifyingGlass, faUser, faBars, faXmark, faCircleCheck, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

import './assets/style/main.scss'

library.add(faShoppingCart);
library.add(faMagnifyingGlass)
library.add(faUser)
library.add(faBars)
library.add(faXmark)
library.add(faCircleCheck)
library.add(faExclamationCircle)

createApp(App)
.use(router)
.component('fa-icon', FontAwesomeIcon)
.mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import './assets/main.css';

library.add(faEnvelope, faGithub, faLinkedin)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');
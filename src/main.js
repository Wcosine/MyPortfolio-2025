import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faThreads, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faThreads,faGithub)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

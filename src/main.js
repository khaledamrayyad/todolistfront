import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

library.add(faPlusCircle,faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// const app =new Vue({
//   el: '#app',
//   components:{ App }

// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

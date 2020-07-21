import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter.js'
import messagePlugin from '@/utils/message.plugin.js'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: "AIzaSyA9QohTCvFIcmfX4lR8taJAEINYcfyleAU",
  authDomain: "crm-vue-dc2c5.firebaseapp.com",
  databaseURL: "https://crm-vue-dc2c5.firebaseio.com",
  projectId: "crm-vue-dc2c5",
  storageBucket: "crm-vue-dc2c5.appspot.com",
  messagingSenderId: "912999722375",
  appId: "1:912999722375:web:aef9b98a7767eea8813722",
  measurementId: "G-B6C306ZGD0"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App)
    }).$mount('#app')
  }
  
})




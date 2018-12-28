import Vue from 'vue';
import App from './App.vue';
import VueMDCAdapter from 'vue-mdc-adapter';
Vue.use(VueMDCAdapter);

import router from './router';
import './styles.scss';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
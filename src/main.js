import Vue from 'vue';
import App from './App.vue';
// import data from './data';
import sayHello from './function';
import { hello, helloWorld } from './message';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// alert(data.message);
sayHello(hello);
sayHello(helloWorld);

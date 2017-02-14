if (window.Vue === undefined) {
    window.Vue = require('vue');
}

if (window._ === undefined) {
    window._ = require('lodash');
}

require('vue-resource');

Vue.component('prices-chart', require('./components/PricesChart.vue'));
Vue.component('model-charts', require('./components/Model.vue'));

const app = new Vue({
    el: '#app'
});
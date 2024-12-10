import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import VueScrollTo from 'vue-scrollto';
import Notifications from '@kyvg/vue3-notification';
import money from 'v-money3'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueApexCharts from "vue3-apexcharts";

createApp(App)
    .use(router)
    .use(store)
    .use(VueScrollTo)
    .use(Notifications)
    .use(money)
    .use(VueApexCharts)
    .component('EasyDataTable', Vue3EasyDataTable)
    .component("apexchart", VueApexCharts)
    .mount('#app')

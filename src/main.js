import Vue from 'vue';

import router from './router.js';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource)

import app from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css'
Vue.use(MintUI)

import VueRouter from 'vue-router'
 var vm=new Vue({
     el:'#app',
     render:c=> c(app),
     router
 })

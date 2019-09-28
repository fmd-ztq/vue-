 import Vue from 'vue';
 import app from './App.vue';
 import MintUI from 'mint-ui';
 import 'mint-ui/lib/style.css';


Vue.use(MintUI)
 import './lib/mui/css/mui.css'
 var vm=new Vue({
     el:'#app',
     render:c=> c(app)
 })

import VueRouter from 'vue-router';
import home from './component/home.vue';
import member from './component/member.vue';
import shopcar from './component/shopcar.vue';
import search from './component/search.vue';

var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search}
    ],
    linkActiveClass:'mui-active'
})
export default router;
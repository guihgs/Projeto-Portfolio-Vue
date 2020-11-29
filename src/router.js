import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    //model 'history',
    routes:[
        {path:'/', name:'Landing', component: () => import('./components/Lander')},
    ]
})

export default router;
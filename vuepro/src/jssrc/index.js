import Vue from 'vue'

let param = {
    el:'#me',
    data:{
        name:'hello'
    }
}
/*let me={
    template:'<div>我的名字{{name}}</div>',
    data:()=>{
        return {
            name:'hello'
        }
    }
}*/
//import myname from './../components/myname.js';
/*import myname from './../components/myname.vue';
let p2 = {
    el:'.container',
    components:{ myname }
}
import me from './../components/me.vue';
let p3 = {
    el: '.container',
    components: {me}
}*/

// import userlogin from './../components/user-login.vue';
import pagenav from './../components/page-nav.vue';
// import newslist from './../components/news-list.vue';
import newsdetail from './../components/news-detail.vue';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter);
Vue.prototype.$axios = axios;

const userlogin = r => {
    r(require('./../components/user-login.vue'));
};
const newslist = b => {
    b(require('./../components/news-list.vue'));
};

/*
let p4 = {
    el: '.container',
    components: {
        'user-login':userlogin,
        'page-nav':pagenav,
        'news-list':newslist
    }
}
let myvue=new Vue(p4);

window.onhashchange=function(){
    if(window.location.hash==='#admin')
        myvue.$children[0].$data.isadmin=true;
    else
        myvue.$children[0].$data.isadmin=false;
}*/

const routerConfig = new VueRouter({
    routes:[
        { path: '/', component: newslist },
        { path: '/news', component: newslist, name:'newslist'},
        { path: '/news/:newsid', component: newsdetail, name:'newsdetail'},
        { path: '/login', component: userlogin, name:'userlogin'}
    ]
});
Vue.component('page-nav',pagenav);
let myvue = new Vue({
    el:'.container',
    router:routerConfig,
})

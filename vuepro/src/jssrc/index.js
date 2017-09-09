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

import userlogin from './../components/user-login.vue';
let p4 = {
    el: '.container',
    components: {'user-login':userlogin}
}
let myvue=new Vue(p4);

window.onhashchange=function(){
    if(window.location.hash==='#admin')
        myvue.$children[0].$data.isadmin=true;
    else
        myvue.$children[0].$data.isadmin=false;
}
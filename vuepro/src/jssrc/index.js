import Vue from "vue";

let me_name={
    template:'<div id="me">我的名字是{{name}}</div>',
    data: ()=>{
        return {name: 'Hello Vue!'};
    }
};

let param = {
    el: '.container',
    components:{'myname':me_name},

};
new Vue(param);
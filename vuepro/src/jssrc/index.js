import Vue from "vue";

import me from "./../components/me.vue";

let param = {
    el: '.container',
    components:{'me':me},
};
new Vue(param);
import Vue from "vue";

import me_name from "../components/myage.vue";

let param = {
    el: '.container',
    components:{'myname':me_name},
};
new Vue(param);
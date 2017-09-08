<style>
    @import "./../css/bootstrap.css";
    #user{
        margin-top: 50px;
    }
</style>
<template>
    <div id="user" class="col-md-8 col-md-offset-2">
        <h2 class="text-center">User Login</h2>
        <form class="form-horizontal" role="form">
            <user-name ref="uname" placeholder="input username"></user-name>
            <user-pass ref="upass" placeholder="input userpass"></user-pass>
            <user-submit></user-submit>
        </form>
    </div>
</template>
<script>
    import username from './user/user-name.vue';
    import userpass from './user/user-pass.vue';
    import usersubmit from './user/user-submit.vue';
    export default {
        components: {
            'user-name': username,
            'user-pass': userpass,
            'user-submit': usersubmit
        }
    }
</script>
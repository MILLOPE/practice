<template>
    <div class="row">
        <div class="form-group">
            <label class="col-sm-2 control-label">userpass</label>
            <div class="col-sm-10">
                <input type="text" v-model="userpass" class="form-control" :placeholder="placeholder">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['placeholder'],
        data () {
            return {
                userpass: ''
            }
        }
    }
</script>
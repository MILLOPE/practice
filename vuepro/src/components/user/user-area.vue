<template>
    <div class="row">
        <div class="form-group">
            <label class="col-sm-2 control-label">area</label>
            <div class="col-sm-4">
                <select class="form-control" v-model="selectedArea" v-on:change="selectedChange">
                    <option v-for="area in areas" v-bind:value="area.area_id">{{area.area_text}}</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                selectedArea:0,
                areas:[
                    {'area_id':0,'area_text':'please select'},
                    {'area_id':1,'area_text':'beijing'},
                    {'area_id':2,'area_text':'shanghai'}
                ]
            }
        },
        methods:{
            selectedChange()
            {
                this.$emit('childChange','userarea',this.selectedArea);
            }
        }
    }
</script>
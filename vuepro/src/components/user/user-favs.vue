<template>
    <div class="row">
        <div class="form-group">
            <label class="col-sm-2 control-label">your favourite:</label>
            <div class="col-sm-10">
                <input type="text" v-model="inputText" class="form-control">
                <table v-if="isShow()" class="table">
                    <thead>
                        <tr>
                            <th>
                                type 1
                            </th>
                            <th>
                                type 2
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="fav in getFavs">
                            <td>{{ fav.class1 }}</td>
                            <td>{{ fav.class2 }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                favs:[
                    {'class1':'web','class2':'js'},
                    {'class1':'pro','class2':'java'}
                ],
                inputText:''
            }
        },
        methods:{
            isShow(){
                return !(this.inputText=='');
            }
        },
        computed:{
            getFavs(){
                return this.favs.filter(function(abc){
                    return (abc.class2.indexOf(this.inputText)>=0);
                }.bind(this))
            }

        }
    }
</script>
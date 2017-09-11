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
                            <td><a v-for="code in filterClass2(fav.class2)">{{ code }}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .table td a {
        width: 25px;margin-left: 5px;
    }
</style>
<script>
    export default {
        data(){
            return {
                favs:[
                    {'class1':'web','class2':['js','html','css','jssdk']},
                    {'class1':'pro','class2':['java']}
                ],
                inputText:''
            }
        },
        methods:{
            isShow(){
                return !(this.inputText=='');
            },
            filterClass2(class2){
                return class2.filter(bbb=>{
                    return bbb.indexOf(this.inputText)>=0;
                })
            }
        },
        computed:{
            getFavs(){
                /*return this.favs.filter(function(abc){
                    return (abc.class2.indexOf(this.inputText)>=0);
                }.bind(this))*/

                /*let arr = [];
                this.favs.forEach((a)=>{
                    this.inputText
                    var obj={};
                    obj.class1=a.class1;
                    obj.class2=a.class2.filter((b=>{
                        return b.indexOf(this.inputText)>=0;
                    }));
                    if(obj.class2.length>0) arr.push(obj);
                })
                console.log(arr);
                return arr;*/

                return this.favs.filter(abc=>{
                    return abc.class2.filter((code)=>{
                        return code.indexOf(this.inputText)>=0
                    }).length>0;
                })
            }

        }
    }
</script>
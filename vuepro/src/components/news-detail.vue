<template>
    <div class="news-list">
        <div class="row">
            <div class="page-header">
                <h2> {{ newstTitle }} <small>{{ newsDate }}</small></h2>
                <p>
                    {{ newsContent }}
                </p>
            </div>

        </div>
    </div>

</template>
<style>

</style>
<script>
    export default{
        created(){
            this.$axios.get('http://localhost:8900/news2.php?newsid='+this.$route.params.newsid)
                .then((response)=> {
                    this.newstTitle=response.data.title;
                    this.newsDate=response.data.pubtime;
                    this.newsContent=response.data.desc;

                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        data(){
            return{
                newstTitle: 'Title',
                newsDate:'Date',
                newsContent: 'Content'
            }
        }

    }
</script>
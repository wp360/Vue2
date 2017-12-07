<template>
    <div>
        <p>电影页面</p>
        <button @click="goBack">上一页</button>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);//-1上一页
            }
        }
    }
</script>
<style scoped>

</style>

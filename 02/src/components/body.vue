<template>
    <div>
        主体内容<br />{{textTwo}}
    </div>
</template>
<script>
    export default {
        //接收父组件参数的设置
        props: ['textTwo'],
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
     div{
    height: 100px;
    background-color: skyblue;
 }
</style>
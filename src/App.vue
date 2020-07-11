<template>
    <div class="wrap-box">
        <el-input v-model="input" placeholder="请输入内容11"/>hello world
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                input: ''
            }
        },
        methods: {
       
        }
        
    }
</script>

<style lang="less" scoped>
.wrap-box {
    width: 200px;
}
</style>
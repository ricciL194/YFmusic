<template>
    <div id="tabBar">
        <router-link tag="div" to="/recommend">推荐 </router-link>
        <router-link tag="div" to="/star">歌手</router-link>
        <router-link tag="div" to="/rank">排行</router-link>
        <router-link tag="div" to="search">搜索</router-link>
    </div>
</template>

<script>
    export default {
        name:'TabBar'
    }
</script>

<style scoped>
#tabBar{width: 100%;background: rgb(0, 0, 0);z-index: 100;height: 44px;display: flex;flex-direction: row;position: fixed;top: 44px;}
#tabBar>div{width: 25%;height: 44px;display: flex;justify-content: center;align-items: center;}
#tabBar>div{font-size: 14px;color: rgba(255, 255, 255,0.5);font-weight: 400;}
#tabBar>div.active{color:rgb(255, 205, 50);}
#tabBar>div.router-link-active{color:rgb(255, 205, 50);}

</style>
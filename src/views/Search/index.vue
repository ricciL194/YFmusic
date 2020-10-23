<template>
    <div id="star">
         <Header />
        <TabBar />
        <div id="search">
            <div class="search-box">
                <span class="icon-search"> </span>
                <input type="text" placeholder="搜索歌曲、歌手" class="box" />
            </div>
        </div>
        <div class="shortcut-wrapper">
            <h1>热门搜索</h1>
            <ul>
                <li>我们的歌</li>
                <li>周杰伦</li>
                <li>说谎</li>
                <li>邓紫棋</li>
                <li>王力宏</li>
                <li>不要说话</li>
                <li>我们的歌</li>
                <li>我们的歌</li>
                <li>我们的歌</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
    name:'Search',
    components:{
        Header,
        TabBar
    }
}
</script>

<style scoped>
#search {position: relative;top: 88px; background-color: rgb(0, 0, 0); width: 100%;height: 40px;padding: 20px 0;}
#search>.search-box{margin:0 20px; height: 40px; border-radius: 10px;background-color: rgb(50, 50, 50);display: flex;flex-direction: row;align-items: center;}
#search>.search-box>.icon-search{display: inline-block;background-color: rgb(50, 50, 50); margin-left: 10px;margin-right: 5px; width: 24px;height: 24px; background-image: url('search.png'); background-size: 24px 24px;}
#search>.search-box>.box{background: rgb(50, 50, 50);border: none;width: 80%;height: 18px;}

.shortcut-wrapper{margin-left: 20px;margin-right: 20px; background: rgb(0, 0, 0);height: 500px;margin-top: 90px;}
.shortcut-wrapper>h1{color: rgba(255, 255, 255,0.5);font-size: 14px;margin-bottom: 15px;}
.shortcut-wrapper>ul{display: flex;flex-direction: row;flex-wrap: wrap;}
.shortcut-wrapper>ul>li{background-color: rgb(50, 50, 50);border-radius: 10px; color: rgba(255, 255, 255,0.3);font-size: 14px;padding: 5px 10px;margin-right: 20px;margin-bottom: 10px;}

</style>

<template>
    <div id="star">
        <Header />
        <TabBar />
        <div id="topList">
            <ul>
                <li v-for="item in rankList" :key="item.type">
                    <div class="imgBox" >
                        <img :src="item.pic_s210" >
                    </div>
                    <ul class="songList">
                        <li>
                            <span>1.</span>
                            <span>{{item.content[0].title}}</span>
                        </li>
                        <li>
                            <span>2.</span>
                            <span>{{item.content[1].title}}</span>
                        </li>
                        <li>
                            <span>3.</span>
                            <span>{{item.content[2].title}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

export default {
    name:'Rank',
    components:{
        Header,
        TabBar
    },
    data(){
        return {
           rankList:[]
        }
    },
    mounted(){
        this.axios.get('https://api.apiopen.top/musicRankings').then((res)=>{
            var rankList=res.data.result;
            this.rankList=rankList;
            // console.log(rankList);
        })
    },
    methods:{
        
    }
}
</script>

<style scoped>
#topList{position: relative;top: 88px;width: 100%;margin-top: 20px;}
#topList>ul{width: 100%; background-color: rgb(0, 0, 0);}
#topList>ul>li{display: flex;flex-direction: row; margin-left: 20px;overflow: hidden; margin-right: 20px;padding-top: 20px;}
#topList>ul>li>.imgBox{width: 100px;height: 100px;}
#topList>ul>li>.imgBox>img{width: 100px;height: 100px;}
#topList>ul>li>.songList{background:rgb(51, 51, 51);padding-left: 20px;padding-right: 20px; display: flex;flex-direction: column;justify-content: center;}
#topList>ul>li>.songList>li{background:rgb(51, 51, 51);color:rgba(255, 255, 255,0.3);width: 55vw; white-space:nowrap;text-align: left;text-overflow :ellipsis; overflow: hidden; line-height: 26px;}
#topList>ul>li>.songList>li>span{font-size: 12px;background:rgb(51, 51, 51);}
</style>

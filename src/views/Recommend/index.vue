<template>
    <div id="star">
        <Header />
        <TabBar />
        <Loading v-if="isLoading" />
        <div v-else id="music-item" ref="wrapper">
            <div class="content" >
                <h1>热门歌单推荐</h1>
                <ul >
                    <li class="pull" v-show="iShow">{{pullDownMsg}}</li>
                    <li v-for="item in songList" :key="item.song_id" >
                        <div class="imgBox" >
                            <img :src="item.pic_small" alt="" @touchstart="handleToDetail(item.song_id)">
                        </div>
                        <div class="text">
                            <h2 @touchstart="handleToDetail(item.song_id)">{{item.title}}</h2>
                            <p>{{item.author}}</p>
                        </div>
                    </li>
                    <li  v-for="(item,index) in songList" :key="'item.song_id-'+index">
                        <div class="imgBox">
                            <img :src="item.pic_small" alt="">
                        </div>
                        <div class="text">
                            <h2>{{item.title}}</h2>
                            <p>{{item.author}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <router-view name="detail"></router-view>
    </div>
    
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import BScroll from 'better-scroll'

export default {
    name:'Recommend',
    components:{
        TabBar,
        Header
    },
    data(){
        return{
            songList:[],
            pullDownMsg:'',
            iShow:false,
            isLoading:true
        }
    },
    mounted(){
        // var that=this;
        this.axios.get('https://api.apiopen.top/musicRankings').then((res)=>{
            var songList=res.data.result[0].content;
            this.songList=songList;
            setTimeout(()=>{
                this.isLoading=false;
            },800)
            // console.log(songList);
            this.$nextTick(() => { 
                var scroll = new BScroll(this.$refs.wrapper, {
                    tap : true ,
                    probeType:1
                      });
                scroll.on('scroll',(pos)=>{
                    if(pos.y>30){
                    this.iShow=true;
                    this.pullDownMsg ='正在更新中';
                    }
                        });
                scroll.on('touchEnd',(pos)=>{
                    if(pos.y>30){
                        this.axios.get('https://api.apiopen.top/musicRankings').then((res)=>{
                        var songList=res.data.result[0].content;
                        this.pullDownMsg ='更新成功';
                        var that=this;
                        this.songList=songList;
                        setTimeout(function(){
                            that.pullDownMsg='';
                            that.iShow=false;
                        },1500);
                        
                    })
                }
                        });
                })})
    },
    methods:{
        handleToDetail(songId){
            // console.log(songId)
            this.$router.push('Recommend/detail/' +songId);
        }
    }
}
</script>

<style scoped>
#music-item{width: 100%;height: 100%; position: absolute;top: 88px;overflow: hidden;}
#music-item>div>h1{height: 65px; color: rgb(255, 205, 50);font-size: 14px;text-align: center;line-height: 65px;}
#music-item>div>ul{width: 100%;background: rgb(0, 0, 0);}
#music-item>div>ul>.pull{color:rgba(255, 255, 255);border: none; margin: 0;padding-left: 20px;transition: 1s;}
#music-item>div>ul>li{height: 62px; padding: 0 20px 20px 20px; display: flex;flex-direction: row;}
#music-item>div>ul>li>.imgBox{height: 60px;width: 60px;padding-right: 20px;}
#music-item>div>ul>li>.imgBox>img{height: 60px;width: 60px;}
#music-item>div>ul>li>.text{width: 200px;height: 50px; font-size: 14px;}
#music-item>div>ul>li>.text>h2{color: rgba(255, 255, 255);font-weight: 400;font-size: 14px;margin-top:5px; margin-bottom: 10px;line-height: 20px;}
#music-item>div>ul>li>.text>p{color: rgba(255, 255, 255,0.3)}
</style>

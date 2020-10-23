<template>
    <div id="detail" class="slide-enter-active">
        <div>
        <Header :title="title"/>        
        <div class="back" @touchstart="handleToBack"><span class="back-icon" ></span><p>返回</p></div>
        <div class="player">
            正在播放...
            <audio src="./于文文 - Price Tag.mp3" autoplay>
                别试了，是你的浏览器渣渣
            </audio>
        </div>
        <div class="info">
            <h2>{{songTitle}}</h2>
            <img src="http://qukufile2.qianqian.com/data2/pic/b733a1a9fc0f63c7015be29b7b840b66/679224035/679224035.jpg@s_2,w_150,h_150" alt="歌手图" >
            <h2>歌手：于文文</h2>
            <p>专辑名：一夜成长</p>
            <p>播放量：100000</p>
        </div>
    </div>
        
    </div>
</template>

<script>
import Header from '@/components/Header'
    export default {
        name:'detail',
        components:{
            Header
        },
        props:['songId'],
        data(){
            return{
                title:'音乐播放',
                detailSong:{ },
                songTitle:''
            }
        },
        methods:{
            handleToBack(){
                this.$router.back();
            }
        },
        mounted(){
            // console.log('songId:',this.songId);
            // this.axios.get(''+this.songId).then(()=>{
            //     //挂载数据。
            // })
            this.songTitle=this.songId;
        }
    }
</script>

<style scoped>
#detail{position: absolute;left: 0;top: 0;z-index: 100;width: 100%;min-height: 100%;color: rgba(255, 255, 255, 0.5);}
.slide-enter-active{animation:.3s slideMove;}
@keyframes slideMove{
    0%{transform: translateX(100%);}
    100%{transform: translateX(0);}
}
.info{display: flex;flex-direction: column;align-items: center;margin: 20px 0;}
.info>h2{font-weight: 400;margin-bottom: 10px;}
.info>p{margin:20px ;}
.player{background-color: rgba(50,50,50);color:rgba(255, 255, 255)}
.back{margin-top:44px;height: 30px;display: flex;flex-direction: row;justify-content: flex-start;align-items: center;}
.back>p{display: inline-block; line-height: 30px;}
.back-icon{display: inline-block; width: 22px;height: 22px; background-image: url('./back.png');background-size: 22px 22px;}
</style>
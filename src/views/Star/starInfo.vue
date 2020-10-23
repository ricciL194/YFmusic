<template>
    <Loading v-if="isLoading" />
    <div v-else class="starInfo">
        <Header />
        <div class="back" @touchstart="handleToBack"><span class="back-icon" ></span><p>返回</p></div>
        <div class="starPic">
            <img src="./0b46f21fbe096b63f6244be901799044ebf81a4c067a.png" alt="">
        </div>
        <div class="bInfo">
            <p>中文名：周杰伦</p>
            <p>外文名：Jay Chou</p>
            <p>职业：歌手、音乐人、演员、导演、编剧</p>
            <p>代表作：七里香  青花瓷  双截棍  夜曲...</p>
            <p>热度排名：1</p>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
    export default {
        name:'starInfo',
        components:{
            Header
        },
        data(){
            return{
                isLoading:true
            }
        },
        methods:{
            handleToBack(){
                this.$router.back();
            }
        },
        mounted(){
             setTimeout(()=>{
                this.isLoading=false;
            },800)
        }
    }
</script>

<style scoped>
.starInfo{position: absolute;top:0;left: 0;width: 100%;min-height: 100%; z-index: 100;}
.starPic{width: 100%;height: 100px;margin-top: 100px; display: flex;flex-direction: row;justify-content: center;align-items: center;}
.starPic>img{width: 80px;height: 80px;}
.bInfo>p{line-height: 30px;font-size: 14px;color:rgb(255, 255, 255);padding-left: 20px;}
.back{margin-top:44px;height: 30px;display: flex;flex-direction: row;justify-content: flex-start;align-items: center;}
.back>p{display: inline-block; line-height: 30px;}
.back-icon{display: inline-block; width: 22px;height: 22px; background-image: url('./back.png');background-size: 22px 22px;}

</style>
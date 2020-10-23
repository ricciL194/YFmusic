<template>
    <div id="mine" class="slider-mine">
        <div class="nav">
            <span class="icon-back" @touchstart="back"></span>
            <div :class="{active:isLike}" @touchstart="like">我喜欢的</div>
            <div :class="{active:!isLike}" @touchstart="like">最近听的</div>
        </div>
        <div class="content" >
            <div class="random" @touchstart="toPlay">
                <span class="icon-play"></span>
                <p>随机播放全部</p> 
            </div>
           <div class="wrapper" ref="wrapper_body">
                <div>
               <ul class="content">
                   <li v-for="item in songList" @touchend="toPlayF(item)"><span class="favorate"></span>{{item}}</li>
               </ul>
               </div>
           </div> 
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
    export default {
        name:'User',
        data(){
            return{
                isLike:false,
                songList:[
                    '不再说话',
                    '七里香',
                    '稻香',
                    'day day up',
                    '七里香',
                    '稻香','曹操','三国恋','秋天不回来','我要你','舞娘',
                    '不再说话',
                    '七里香',
                    '稻香',
                    'day day up',
                    '七里香',
                    '稻香','曹操','三国恋','秋天不回来','我要你','舞娘'
                ]
            }
        },
        methods:{
            back(){
                 this.$router.back();
            },
            like(){
                this.isLike=!this.isLike;
            },
            toPlay(){
                this.$router.push('Recommend/detail/672865438');
            },
            toPlayF(item){
                this.$router.push('Recommend/detail/672865438');
            }
        },
        mounted(){
        }
    }
</script>

<style scoped>
#mine{width: 100%;background-color: rgb(0,0,0);}
.slider-mine{animation: .5s slider-mine;}
@keyframes slider-mine{
    from {transform: translateX(100%);}
    to {transform:translateX(0);}
}
#mine>.nav{width: 100%;height: 5.5vh;margin: 10px 0 30px; display: flex;flex-direction: row;justify-content: center;align-items: center;}
#mine>.nav>div{text-align: center;line-height: 2.4vh; color: rgba(255, 255, 255, 0.3); width: 32.5vw;height: 2.4vh;background-color: rgb(0,0,0); border: 1px solid rgba(243, 233, 233, 0.5);padding:8px;}
#mine>.nav>.active{color: rgba(243, 233, 233);background-color: rgb(51, 51, 51);}
#mine>.nav>.icon-back{display: inline-block;position: absolute;left: 10px;top: 15px; width:22px ;height: 22px; background-image: url('back.png');background-size: 22px 22px;}
#mine>.content{background-color: rgb(0,0,0);}
#mine>.content>.random{margin: 0 auto;width: 135px;height: 32px;border: 2px solid rgba(243, 233, 233,0.5);border-radius: 10px;display: flex;flex-direction: row;justify-content: center;align-items: center;}
#mine>.content .icon-play{display: inline-block;margin: 8px; width: 16px;height: 16px; background-image: url('play.png');background-size: 16px 16px;}
#mine>.content>.random>p{color: rgba(255, 255, 255, 0.5);text-align: center;word-spacing: 1em;font-size: 14px;font-weight: 400;}
.wrapper{width: 100%; overflow: hidden;position: absolute;top: 120px;left: 0;}
.wrapper ul{width: 100%;}
.wrapper ul>li{height: 50px;border-top: 1px solid rgba(243, 233, 233, 0.5);color: rgba(255, 255, 255);line-height: 30px;padding-left: 20px;display: flex;flex-direction: row;justify-content: flex-start;align-items: center;}
.wrapper ul>li>.favorate{display: inline-block;width: 16px;height: 16px; background-image: url('favorate.png');background-size: 16px 16px;margin-right: 14px;}

</style>
<template>
    <div id="star">
        <Header />
        <TabBar />
        <Loading v-if="isLoading" />
        <div v-else id="stars-body">
            <div class="list-fixed">
                热门
            </div>
            <div class="list-shortcut">
                <ul>
                    <li>热</li>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                    <li>G</li>
                    <li>H</li>
                    <li>J</li>
                    <li>K</li>
                    <li>L</li>
                    <li>M</li>
                    <li>N</li>
                    <li>O</li>
                    <li>P</li>
                    <li>Q</li>
                    <li>R</li>
                    <li>S</li>
                    <li>W</li>
                    <li>Z</li>
                </ul>
            </div>
            <ul v-for="(item,index) in starList" :key="index">
                <li class="list-group-item">
                    <a href="#"><img :src="item.imgurl" alt="" @touchstart="toInfo(item.singerid)">
                        <span >{{item.singername}}</span></a>
                </li>
            </ul>
        </div>
        <router-view name="starInfo"></router-view>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import BScroll from 'better-scroll'


export default {
    name:'Star',
    components:{
        Header,
        TabBar
    },
    data(){
        return{
            starList:[],
            isLoading:true
        }
    },
    mounted(){
        // var that=this;
        this.axios.get('/api/v5/singer/list?version=9108&showtype=1&plat=0&sextype=0&sort=1&pagesize=100&type=0&page=1&musician=0').then((res)=>{
            // console.log(res.data.data.info);
            var starList=res.data.data.info;
            this.starList=starList;
            setTimeout(()=>{
                this.isLoading=false;
            },800)
            // this.$nextTick(() => { 
            //     this.scroll = new BScroll(this.$refs.wrapper, {}) 
            //     })
            // [ { index:'A' , list:[{nm:'阿龙',id:123}] } ]
            // console.log(songList);
            for(var i=0;i<starList.length;i++){
                var firstLetter=starList[i].singername.substring(0,1);
                // console.log(firstLetter);
                this.axios.get('https://helloacm.com/api/pinyin/?cached&s='+firstLetter+'JustYY.com&t=1').then((res)=>{
                    // console.log(res.data.result[0].substring(0,1).toUpperCase());
                })
            }
            // this.formateStarList(starList);
        })
    },
    methods:{
        formateStarList(starList){
            var starList=[];
            var hotList=[];
            for(var i=0;i<starList.length;i++){
                var firstLetter=starList[i].singername.subString(0,1);
                // console.log(firstLetter);
            }
              function toCom(firstLetter){
                  for(var i=0;i<starList.length;i++){
                      if(starList[i].index ===firstLetter){
                          return false;
                      }
                  }
                  return true;
                }
            },
        toInfo(starId){
                this.$router.push('star/starInfo');
            }
        }
    }
</script>

<style scoped>
#stars-body{position: relative;top: 118px; width: 100%;}
#stars-body>.list-fixed{position: fixed;top: 88px;background: rgb(51, 51, 51);left: 0; width: 100%;height: 30px;line-height: 30px;padding-left: 20px; color: rgba(255, 255, 255,0.5);z-index: 100;font-size: 12px;}
#stars-body>.list-shortcut{position: fixed;right: 0; padding:20px 0;width: 20px;z-index: 100;}
#stars-body>.list-shortcut>ul{display: flex;flex-direction: column;}
#stars-body>.list-shortcut>ul>li{padding:3px;font-weight: 400;font-size: 12px;font-family: Helvetica; width: 14px;height: 12px;text-align: center;line-height: 18px;color: rgba(255, 255, 255,0.5);}
#stars-body>ul{width: 100%;background: rgb(0, 0, 0); }
#stars-body>ul>.list-group-item{padding: 20px 0 0 30px;height: 50px;}
#stars-body>ul>.list-group-item>a{ width: 50px;height: 50px;}
#stars-body>ul>.list-group-item>a>img{width: 50px;height: 50px;border-radius: 50%;vertical-align:bottom}
#stars-body>ul>.list-group-item>a>span{display: inline-block;margin-left: 20px;line-height: 50px; color: rgba(255, 255, 255,0.5);font-size: 14px;font-weight: 400;}
</style>

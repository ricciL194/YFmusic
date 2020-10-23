<template>
    <div id="header">
        <div class="header-body">
            <div class="icon" ></div>
            <div class="text">Chicken Music</div>
            <div class="mine" @touchstart="toUser"><i class="icon-mine"></i></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Header',
        props:['title'],
        methods:{
            toUser(){
                this.$router.push('/user');
            }
        }
    }
</script>

<style scoped>
#header{width: 100%;background: rgb(0, 0, 0);z-index: 100; height: 44px;display: flex;flex-direction: column;align-items: center;position: fixed;top: 0;}
#header>.header-body{display: flex;flex-direction: row;justify-content: center;}
#header>.header-body>.icon{display: block;margin-top: 6px;margin-right: 9px; width: 30px;height: 32px; background-image: url('default.png');background-size: 30px 32px;}
#header>.header-body>.text{display: block;line-height: 44px; color:rgb(255, 205, 50);font-size: 18px;}
#header>.header-body>.mine{height: 44px;width: 44px;position: absolute;right: 0;top: 0;display: flex;justify-content: center;align-items: center;}
#header>.header-body .icon-mine{display: block; width: 24px;height: 24px; background-image: url('user.png'); background-size: 24px 24px;}

</style>
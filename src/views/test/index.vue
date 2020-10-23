<template>
    <div id="test" ref="wrappe">
        <div class="content">
        <mt-index-list>
            <mt-index-section index="A">
                <mt-cell title="阿龙" style="{color:'#FFF'}"></mt-cell>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
                <mt-index-section index="C">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
                <mt-index-section index="D">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
                <mt-index-section index="E">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
                <mt-index-section index="F">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
                <mt-index-section index="G">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
                <mt-index-section index="H">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
                <mt-index-section index="I">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
                <mt-index-section index="J">
                <mt-cell title="Baldwin"></mt-cell>
                <mt-cell title="Braden"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Z">
                <mt-cell title="Zack"></mt-cell>
                <mt-cell title="Zane"></mt-cell>
            </mt-index-section>
            </mt-index-list>
        </div>
            
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name:'test',
         mounted() {
            this.$nextTick(() => { 
                this.scroll = new BScroll(this.$refs.wrappe, {}) 
                })
             
        },
    }
   
</script>

<style scoped>
#test{overflow: hidden;}
.content {width: 100%;}
</style>
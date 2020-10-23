export default {
    path:'/star',
    component:()=> import('@/views/Star/index'),
    children:[
        {
            path:'starInfo',
            components:{
                starInfo:()=>import('@/views/Star/starInfo')
            }
        }
    ]
}
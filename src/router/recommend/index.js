export default {
    path:'/recommend',
    component:()=> import('@/views/Recommend/index'),
    children:[
        {
            path:'detail/:songId',
            components:{
                detail:()=>import('@/views/Recommend/detail')
            },
            props: {
                detail :true
            }
        }
    ]
}
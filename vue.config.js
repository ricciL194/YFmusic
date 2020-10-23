module.exports={
    devServer: {
        proxy: {
            '/api' :{
                target :'http://mobilecdnbj.kugou.com',
                changeOrigin : true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}
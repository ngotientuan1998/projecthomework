const express = require('express')//import thư viện express
require('dotenv').config()

const  app = express(); //khai báo 1 app bằng express
const   port =process.env.PORT || 8888//cổng chạy bên 
app.use(express.json())//express có thể đọc hiểu được data theo dạng json
app.use(express.urlencoded({extended:true}))//express đọc theo dạng urlancoded
app.use('/',(req,res)=>{res.send('Server ommmmmmmmmm')})
app.listen(port,()=>{
    console.log(`server running on the gate:${port}`)
})
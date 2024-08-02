const express =require('express');
const app = express();
require('dotenv').config()
const   PORT =  process.env.PORT;
app.use('/github',(req,res)=>{
    res.send(gitHubData);
    res.end()
})
// app.use('/',(req,res)=>{
//     res.send("server is ready");
//     res.end()
// })
app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            joke:"this is joke 1"
        },
        {
            id:2,
            joke:"this is joke 2"
        },
        {
            id:3,
            joke:"this is joke 3"
        },
        {
            id:4,
            joke:"this is joke 4"
        },
        {
            id:5,
            joke:"this is joke 5"
        },
        
    ]
    res.send(jokes);
    res.end()
})
app.listen(PORT,()=>{
    console.log("listening on port 4000")
})

//++++++++++++++++++++++++ without using express ++++++++++++++++++++++
// var http = require('http')
// http.createServer((req,res)=>{
//     res.write("hello");
//     res.end()
// }).listen(3000,()=>{
//     console.log("listening on port 3000")
// })
require('dotenv').config();
const express= require('express');

const app=express();
const port=3001;
app.get('/',(req,res)=>{
    res.send('hello from res send port No: '+port)
});
app.get('/about',(req,res)=>{
    res.send('This is about page from backend: '+port)
});
app.get('/login',(req,res)=>{
    res.send('<h1>Login in Now</h1>')
});
app.get('/profile',(req,res)=>{
    res.send('<h2>The Profile Page<h2>')
})

app.listen(process.env.PORT,()=>{
    console.log('port is running on port no: '+port);
})
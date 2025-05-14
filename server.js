require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/',(req,res) => {
  res.send('Welcome To the Home Page');
})

app.get('/about' , (req,res) => {
  res.send('This is the About Page');
})

app.get('/login' , (req,res) => {
  res.send('This is Login page made by me');
})

app.listen(port , ()=>{
  console.log(`Server running at port : ${port}`);
})
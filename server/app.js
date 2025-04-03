// /app.js
require('dotenv').config({ path : './database/dbConfig.env'})
const express = require('express')
const app = express()
const ueserRouter = require('./router/user_router.js')
// 미들웨어
// applicaion/x-www-form-urlencoded
app.use(express.urlencoded({extended:false}))
// application/json
app.use(express.json())


const port = 3000
app.listen(port ,()=>{
  console.log('Server Start')
  console.log(`http://localhost:${port}`);
})

// 라우팅
app.get('/',(req,res)=>{
  res.send('Welcome!!')
})

app.use('/',ueserRouter)
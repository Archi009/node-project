// router/userrouter.js
// 라우터 모듈
const express = require('express')
const router = express.Router()
const userService = require('../service/user_service.js')

// 라우팅 = 사용자의 요청 (URL+MEHOD) +Service + view

// 전체조회
router.get('/users', async (req,res)=>{
  let list = await userService.findAll()
  res.send(list)
})

// 단건조회
router.get('/users/:user',async(req,res)=>{
  let id = req.params.user
  let info = await userService.getInfo(id)
  res.send(info)
})

// 등록
router.post('/users',async(req,res)=>{
  let info = req.body
  console.log("등록  "+info);
  let result = await userService.insertInfo(info)
  res.send(result)
})

// 수정
router.put('/users/:user',async(req,res)=>{
  let id = req.params.user
  let info = req.body
  console.log("수정  " +info);
  let result = await userService.updateInfo(info,id)
  // console.log(result);
  res.send(result)
})

// 삭제
router.delete('/users/:user',async(req,res)=>{
  let id = req.params.user
  let result = await userService.delInfo(id)
  res.send(result)
})


module.exports = router;

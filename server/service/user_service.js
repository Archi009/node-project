// service/user_service.js
const mariaDB = require('../database/mapper.js')
const publFuc = require('../func/publicFuncs.js')

// 전체조회
const findAll = async () => {
  let list = await mariaDB.query('userList')
    .catch(err => console.log(err))
  return list
}

// 단건조회
const getInfo = async (id) => {
  let result = await mariaDB.query('userInfo', id)
                            .catch(err => console.log(err))
  let info = result[0]
  return info
}

// 등록
const insertInfo = async (info)=>{
  const colunmAry = ['user_id','user_pwd','user_name','user_gender','user_age']
  let infoAry = publFuc.mkAry(info,colunmAry)
  let result = await mariaDB.query('userInsert',infoAry)
                            .catch(err => console.log(err))
  if (result.affectedRows > 0 ){
    console.log(result);
    return {result : true, user_no : result.insertId}
  }else{
    return{result:false}
  }
}

// 수정
const updateInfo = async (info, id)=>{
  let values =[info,id]
  let result = await mariaDB.query('userUpdate',values)
  return result
}

// 삭제
const delInfo = async (id)=>{
  let result= await mariaDB.deleteInfo(id)
  return result
}






module.exports = {
  findAll,
  getInfo,
  insertInfo,
  updateInfo,
  delInfo
}
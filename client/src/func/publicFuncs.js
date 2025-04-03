// func/publicFuncs.js

//날짜 포맷 변환함수
const dateFormat= function(value,format){
  let date =(value == null) ? new Date() : new Date(value);
  let year = date.getFullYear()
  let month =('0'+ (date.getMonth() +1)).slice(-2)
  let day = ('0'+ (date.getDate())).slice(-2)
  let result = format.replace('yyyy',year)
                     .replace('MM',month)
                     .replace('dd',day)
  return result
}

module.exports={
  dateFormat
}
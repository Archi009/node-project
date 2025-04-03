// func/publicFuncs.js

//객체와 키배열 입력하면 값배열 반환함수
const mkAry = (target, list)=>{
  let ary = []
  for(let field of list)
  {
    let val = target[field]
    ary.push(val)
  }
  return ary
}

module.exports={
  mkAry
}
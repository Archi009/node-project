// database/sql/user.js
// Table : t_users

// 전체조회
const userList =
`SELECT user_no,
        user_id,
        user_pwd,
        user_name,
        user_gender,
        user_age,
        join_date
  FROM  t_users
ORDER BY user_no`;

// 단건조회
// 물음표가 한 개 : 데이터의 구조는 문자, 숫자 단일값
const userInfo =
`SELECT user_no,
        user_id,
        user_pwd,
        user_name,
        user_gender,
        user_age,
        join_date
  FROM  t_users
  WHERE user_no = ?`;

  // 등록
  // 물음표가 여러개 : 데이터의 구조는 배열
const userInsert =
`INSERT INTO t_users
            (user_id, 
             user_pwd, 
             user_name,
             user_gender,
             user_age,
             )
      VALUES (?,?,?,?,?)
`;

// 수정
// 물음표가 두 개 : 데이터의 구조는 첫번째 대상의 컬럼이 정확하지 않으므로 객체,
//  두번째 대상은 문자 또는 숫자 단일값으로 갯수가 두개인 배열로 넘겨준다
const userUpdate =
`UPDATE t_users
    SET ?
  WHERE user_no = ?`;

  const delInfo =
  `DELETE FROM t_users
  WHERE user_no = ?`


module.exports ={
  userList,
  userInfo,
  userInsert,
  userUpdate,
  delInfo
}
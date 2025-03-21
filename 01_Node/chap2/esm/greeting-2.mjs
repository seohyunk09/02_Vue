/* export default 
- 내보내지는 변수| 함수의 기본값을 설정
== 외부에서 import시 가져오는 함수나 변수가 정해져 있다!(고정되어 있음)
*/

/* export */ const hi = (name) => {
  console.log(`${name}님, 안녕하세요?`);
};

/* export  */ const goodbye = (name) => {
  console.log(`${name}님, 안녕히 가세요.`);
};
export default { hi, goodbye };

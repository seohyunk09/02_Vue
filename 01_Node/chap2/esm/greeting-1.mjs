// 외부에서 해당 모듈의 hi, goodbye 를 import 가능하게 함!!

/* export */ const hi = (name) => {
  console.log(`${name}님, 안녕하세요?`);
};

/* export  */ const goodbye = (name) => {
  console.log(`${name}님, 안녕히 가세요.`);
};
export { hi, goodbye }; /*
export를 없애면?? 변수에 화살표 함수가 대입되어 있는 것
js 파일 안에서 쓰겠다. 

*/

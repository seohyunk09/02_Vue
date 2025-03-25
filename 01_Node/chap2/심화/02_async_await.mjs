import order from './async-2.mjs'; //모듈 재사용

async function main() {
  //예외 처리 구문
  try {
    const fn = await order('양념치킨');
  } catch (err) {
    //Promise 결과로 reject() 수행시 예외가 발생함!@!
    // catch 구문으로 잡아서 처리1!
    console.log(err);
  }
}
main(); // 함수 호출

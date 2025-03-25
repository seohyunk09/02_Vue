// async: await를 포함한 함수, 결과로 promise 객체를 반환함!

async function init() {
  // fetch(주소) 외부로부터 응답을 가져옴(비동기)
  //await : 비동기 응답이 처리될 때까지 대기-> 동기로 변경

  const response = fetch('https://jsonplaceholder.typicode.com/users');
  console.log(response.ok);

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
  console.log('프로그램 종료');
}
// response.ok: 응답 성공시 true, 실패시 false
//-> undefined(정의 안됨) -> response가 존재하지 않음

// 응답이 올때 까지 기다려야 한다!! => await
console.log(response.ok);
init(); // 함수 호출!!

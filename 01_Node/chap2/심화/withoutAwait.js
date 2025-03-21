fetch('https://jsonplaceholder.typicode.com/users') // promise 반환
  .then((response) => {
    if (response.ok) {
      return response.json(); // promise 반환
    }
  })
  .then((result) => console.log(result));
/* fetch('http://jsonplaceholder.typicode.com/users') 
.then()
.catch()

fetch(경로)
비동기로 응답가져오기
결과로 promise 반환
무조건 성공 resolve() 실행 -> then() 으로만 처리 가능 
-> response.ok등을 이용해서 응답 상태 코드 확인 

*/
// response: fetch 결과

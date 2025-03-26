
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  // 정상 응답(200) 확인
  if(response.ok){ // response.status==200
    return response.json(); // promise 반환 
  }
}
.then((data)=> {
  console.log(data);
})
.catch((err) => {
  console.log(err);
})
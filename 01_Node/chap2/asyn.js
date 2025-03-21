function displayA() {
  console.log('A');
}
function displayB() {
  setTimeout(() => {
    // 2초 후에 B 출력
    // 그 동안 다른 코드 수행하고 있어!-> 비동기

    console.log('B');
  }, 2000);
}
function displayC() {
  console.log('C');
}

displayA();
displayB();
displayC();

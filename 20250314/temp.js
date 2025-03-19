const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log('arr1:', arr1); //1,2,3
console.log('arr2:', arr2); //1,2,3

arr2[0] = 100; // 복사본 0번 인덱스 값 변경
console.log('변경 후');
console.log('arr1:', arr1); //1,2,3
console.log('arr2:', arr2); //1,2,3

const arr3 = [100, 200, 300];
const arr4 = [...arr3]; // ...: 전개 연산자
// [...arr3]   [...[100,200,300]] 전개 연산자가 붙어있는 배열에 ~
arr4[0] = 99999;

console.log('arr3:', arr3);
console.log('arr4:', arr4);

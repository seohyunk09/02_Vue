// example.txt 의 내용을 읽어서 화면에 출력(동기 함수로)

fs = require('fs');

const data = fs.readFileSync('./example.txt');
console.log(data);

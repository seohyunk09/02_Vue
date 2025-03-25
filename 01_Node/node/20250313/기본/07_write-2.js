//비동기 함수
//앞의 example.txt를 읽어서  text-1.txt 로 저장

fs = require('fs');

const data = fs.readFileSync('./example.txt', 'utf8');
if (fs.existsSync('text-1.txt')) {
  console.log('file already exists');
} else {
  fs.writeFileSync('./text-1.txt', data);
}

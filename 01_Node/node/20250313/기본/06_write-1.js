//앞의 example.txt 를 읽어서  text-1.txt 로 저장
//동기함수로 작성

fs = require(`fs`);
const data = fs.readFileSync('./example.txt', 'utf8');

if (fs.existsSync('text-1.txt')) {
  console.log('file already exist');
} else {
  fs.writeFileSync('./text-1.txt', data);
}

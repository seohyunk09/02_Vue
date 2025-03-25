//readMe.txt 를 작성하고, 이 파일을 스트림을 이용해서 읽어서 콘솔에 출력
//앞에서 준비한 readMe.txt를 스트림과 파이프를 이용해서 writeMe.txt로 복사하세요
const fs = require('fs');

const rs = fs.createReadStream('readMe.txt', 'utf8');
const ws = fs.createWriteStream('./writeMe.txt');

rs.pipe(ws);

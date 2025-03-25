const path = require('path');
// 경로 연결하기

const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);
// 전체적인 절대경로/ 디렉토리 경로
console.log(`파일 절대경로:${__filename}`);

const dir = path.dirname(__filename);
console.log(`경로만: ${dir}`);

// 현재 파일의 파일명. 확장명을 제외한 파일명
//const path = require('path');
const fn = path.basename(__filename);
const fn2 = path.basename(__filename, '.js');

console.log(`파일 이름:${fn}`);
console.log(`파일 이름(확장자 제외): ${fn2}`);

// 현재 파일의 확장명 출력
const ext = path.extname(__filename);
console.log(`파일 확장자:${ext}`);
console.log(path.basename(__filename, ext));

// 현재 파일의 경로 요소 전체를 출력
const parsedPath = path.parse(__filename);
console.log(parsedPath);

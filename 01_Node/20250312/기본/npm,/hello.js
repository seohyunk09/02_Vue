const c = require('ansi-colors');
function hello(name) {
  console.log('${c.green(name)}님 , 안녕하세요?');
}
hello('홍길동');
// npm uninstall ansi-colors (모듈 삭제)
// 모듈 삭제 후 수행 => cannot find module 'ansi-colors' 에러 발생

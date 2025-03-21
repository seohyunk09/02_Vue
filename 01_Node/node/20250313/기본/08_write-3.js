// 앞의 example.txt를 읽어서 text-1.txt 로 저장하는데, 기존에 text-1.txt 가 존재하면,
// 파일에 존재한다고 출력, 존재하지 않는 경우에만 출력

fs = require('fs');

fs.readFile('./example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile('./text2.txt', data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('text-2.txt is saved!');
  });
});

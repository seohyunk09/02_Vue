import fs from 'node:fs/promises';

async function getDirectories() {
  //반환형이 promise
  //fs.readdirSync('./'); //비동기 동작을 기다리겠다= await
  try {
    const result = await fs.readdir('./');
    console.log(result);
  } catch (err) {}
  //const result = await fs.readdir('./'); // Promise 반환

  console.error(err);
}
getDirectories(); // 호출

//fs.promises.readdir

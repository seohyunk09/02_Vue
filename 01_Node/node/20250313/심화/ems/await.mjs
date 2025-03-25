// mjs 는 require이 아니라 !!1 import 구문을 활용한다!!

async function readDirAsyn() {
  try {
    const files = await fs.readdir('./');
    console.log(files);
  } catch (err) {
    console.error(err);
  }
}
readDirAsyn();

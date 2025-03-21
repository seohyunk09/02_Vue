fetch('https://jsonplaceholder.typicode.com/users') // promise 반환
  .then((response) => {
    if (response.ok) {
      return response.json(); // promise 반환
    }
  })
  .then((result) => console.log(result));

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));

// unlike Promise.all, .allSettled runs all promises regardless if rejected or not
Promise.allSettled([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((e) => console.log(`something failed`, e));

setTimeout(() => {
  console.log("set Time out executed");
}, 0);

console.log("Outside set time out");

const promise = new Promise((res, rej) => res("Success"));

console.log(promise);

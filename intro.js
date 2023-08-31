const a = 10;
const b = 20;
const c = a + b;
console.log(c);
const intervalId = setInterval(() => {
  console.log('inside setInterval');
});
setTimeout(function() {
  console.log('inside setTimeout');
  clearInterval(intervalId);
}, 1000);
// const xhr = new XMLHttpRequest();
// fetch // to make network request
console.log('after async operations');
// for
// promises -> async await
async function dummy() {
  return new Promise.resolve('Hello')
}

async function demo() {
  const result = await dummy();
  console.log(result);
}
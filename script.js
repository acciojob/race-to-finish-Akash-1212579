window.promises = [];
// Do not change the code above this
// add your promises to the array `promises`
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 1 resolved'), 500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Promise 2 rejected'), 200);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 3 resolved'), 100);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 1 resolved'), 400);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Promise 2 rejected'), 250);
});
promises.push(promise1);
promises.push(promise2);
promises.push(promise3);
promises.push(promise4);
promises.push(promise5);

Promise.any(promises)
  .then((value) => {
    console.log('Resolved with:', value);
  })
  .catch((error) => {
    console.error('All promises rejected:', error.errors);
  });
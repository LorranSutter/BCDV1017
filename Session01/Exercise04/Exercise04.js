const promise1 = 101;
const promise2 = "follow the white";
const promise3 = new Promise((resolve, reject) => resolve('rabbit.. neo'));

Promise.all([promise1, promise2, promise3]).then(res => console.log(res));
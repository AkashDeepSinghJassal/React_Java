// let a = 'hello'
// console.log(a);
fetchData = () => {
    return new Promise((resolve, reject) => {
        resolve('resolve');
        reject('reject')
    });
}
// fetchData()
// .then((result) => {
//     console.log('first');
//     fetchData();
// })
// .then((result) => {
//     console.log('second');
//     console.log(result);
// })
// .catch((err) => {
//     console.log('error' , err);
// });
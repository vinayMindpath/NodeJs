import fetch from "node-fetch";
const url = `https://jsonplaceholder.typicode.com/todos`;

export const data = async () => {
  let getting = await fetch(url);
  let getJson = await getting.json();
  return getJson;
};

// data();
// data().then((res) => console.log(res));
// const some = data().then((res) => {
//   let count = 1;
//   res.forEach((element) => {
//     if (count <= 5) {
//       console.log(element);
//     }
//     count++;
//   });
// });
// console.log(some);

// module.exports.get = data;

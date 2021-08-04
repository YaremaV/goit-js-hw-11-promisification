// Задание 1
// const delay = ms => {
//  return new Promise((resolve, reject) => {
//    resolve(ms);
//   })
// };

// const logger = time => console.log(`Resolved after ${time}ms`).catch((err) => console.log(err));

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// Задание 2
// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {

//   return new Promise((resolve, reject) => {
//     const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   resolve(updatedUsers);
//   })
  
// };

// const logger = updatedUsers => console.table(updatedUsers);

// toggleUserState(users, 'Mango').then(logger).catch((err) => console.log(err));
// toggleUserState(users, 'Lux').then(logger).catch((err) => console.log(err));


// Задание 3
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction, onSuccess, onError) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       onSuccess(transaction.id, delay);
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
// };

// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// /*
//  * Работает так
//  */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
// /*
//  * Должно работать так
//  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);



// ==============================   ========================
// const getUserData = new Promise((resolve) => {
//   resolve({ name: Vlad, age: 24 });
// });

// const test = Promise.resolve('Hello!');

// getUserData.then((data) => console.log(data)).catch(() => console.log('error'));

// test.then(data => console.log(data));


// const createArray = new Promise((done, error) => {
// const arr = [];

// for (let i = 0; i < 10000000; i += 1){
//   arr.push(i)
//   }
  
//   error(arr);
// })



// createArray.then((data) => console.log(data)).catch((err) => console.log(err))
// console.log(createArray.then())
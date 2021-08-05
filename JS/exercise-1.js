// Задание 1
const delay = ms => {
 return new Promise((resolve, reject) => {
   resolve(ms);
  })
};

const logger = time => console.log(`Resolved after ${time}ms`).catch((err) => console.log(err));

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
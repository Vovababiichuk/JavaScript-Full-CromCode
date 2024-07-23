//! Две равнозначные версии промиса

// const resolvedPromise = Promise.resolve(17);

// const resolvedPromise2 = new Promise(resolve => {
// 	resolve(17);
// })

// const rejectedPromise = Promise.reject(new Error('Oops, error!'));

// const rejectedPromise2 = new Promise((_, reject) => {
// 	reject(new Error('Oops, error!'));
// })

// ===================================
// ===============PROMISE.All====================
// ===================================

// const getValueWithDelay = (value, delay) =>
//   new Promise(resolve => {
//     setTimeout(() => {
// 			console.log(`Value: ${value}`);
//       resolve(value);
//     }, delay);
//   });

// const asyncNum1 = getValueWithDelay(56, 1000);
// const asyncNum2 = getValueWithDelay(4, 2000);
// const asyncNum3 = getValueWithDelay(10, 2000);

// const getSum = numbers =>
// 	numbers.reduce((sum, num) => sum + num, 0);

// const asyncSum = (...asyncNumbers) => {
// 	return Promise.all(asyncNumbers)
// 		.then(numbers => getSum(numbers));
// }

// asyncSum(asyncNum1, asyncNum2, asyncNum3)
// 	.then(res => console.log(res))

// ======================================
// ==================PROMISE.All====================
// ======================================

// const getValueWithDelay = (value, delay) =>
//   new Promise(resolve => {
//     setTimeout(() => {
// 			console.log(`Value: ${value}`);
//       resolve(value);
//     }, delay);
//   });

// const asyncNum1 = getValueWithDelay(56, 1000);
// const asyncNum2 = getValueWithDelay(undefined, 2000);
// const asyncNum3 = getValueWithDelay('10', 2000);

// const getSum = numbers =>
// 	numbers
// 		.filter(value => !isNaN(value))
// 		.reduce((sum, num) => sum + Number(num), 0);

// const asyncSum = (...asyncNumbers) => {
// 	return Promise.all(asyncNumbers)
// 		.then(numbers => getSum(numbers));
// }

// asyncSum(asyncNum1, asyncNum2, asyncNum3)
// 	.then(res => console.log(res))

// ======================================
// ====================PROMISE.All==================
// ======================================

// const getValueWithDelay = (value, delay) =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(`Value: ${value}`);
//       resolve(value);
//     }, delay);
//   });

// const asyncNum1 = getValueWithDelay(56, 1000);
// const asyncNum2 = getValueWithDelay(undefined, 2000);
// const asyncNum3 = getValueWithDelay('10', 2000);

// const getSum = numbers =>
//   numbers.filter(value => !isNaN(value)).reduce((sum, num) => sum + Number(num), 0);

// const asyncSum = (...asyncNumbers) => {
//   return Promise.all(asyncNumbers)
//     .then(numbers => getSum(numbers))
//     .catch(() => Promise.reject(new Error("Can't get sum")));
// };

// asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3).then(res => console.log(res));

// ======================================
// ====================PROMISE.ALLSATTLED==================
// ======================================

// const getValueWithDelay = (value, delay) =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(`Value: ${value}`);
//       resolve(value);
//     }, delay);
//   });

// const asyncNum1 = getValueWithDelay(56, 1000);
// const asyncNum2 = getValueWithDelay(undefined, 2000);
// const asyncNum3 = getValueWithDelay('10', 2000);

// const asyncSum = (...asyncNumbers) => {
//   return Promise.allSettled(asyncNumbers).then(numbers => console.log(numbers));
// };

// asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3).then(res => console.log(res));

// ======================================
// ====================PROMISE.RACE==================
// ======================================

const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'John',
          age: 30,
        },
        source: url,
      });
    }, randomDelay);
  });

const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

const getUserASAP = userId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}/users/${userId}`);
  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user-id-1').then(res => console.log(res));

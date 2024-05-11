// 1 - masala

// function removeFirstOccurrences(str, value) {
//   let result = str.replace(value, "");
//   return result;
// }

// console.log(removeFirstOccurrences('To be or not to be', 'not'))




// 2 - masala

// function unbracketTag(str) {
//   let newStr = ''
//   for(let i = 1; i < str.length - 1; i++) {
//     newStr += str[i]
//   }
//   return newStr
// }

// let word = '<div>'
// console.log(unbracketTag(word))






// 3 - masala

// function isPrime(number) {
//  if(number == 1) {
//   return `1 tub son emas`
//  } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//         return false;
//     } else {
//       return true
//     }}
//  }
// }

// console.log(isPrime(1))



// 4 - misol

// function getCities(arr) {
//   let result = arr.reduce((acc, curVal) => {
//     if(acc[curVal.country]) {
//       acc[curVal.country].push(curVal.city)
//       // console.log(acc)
//     } else {
//       acc[curVal.country] = [curVal.city]
//       // console.log(acc)
//     }
//     return acc
//   }, {})

//   return result
// }


// const countryCities = [	
// 	{ country: 'Belarus', city: 'Brest' },
// 	{ country: 'Russia', city: 'Omsk' },
// 	{ country: 'Russia', city: 'Samara' },
// 	{ country: 'Belarus', city: 'Grodno' },
// 	{ country: 'Belarus', city: 'Minsk' },
// 	{ country: 'Poland', city: 'Lodz' }
// ]
// console.log(getCities(countryCities))




// 5 - misol


// function getSumBetweenNumbers(n1, n2) {
//   let sum = 0
//   for(let i = n1; i <= n2; i++) {
//     sum += i
//   }
//   return sum
// }


// console.log(getSumBetweenNumbers(5, 10))





// 6 - misol

// function getElementsOneTime(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//     }
//     if (count === 1) {
//         result.push(arr[i]);
//     }
// }
// return result
// }

// console.log(getElementsOneTime([1, 5, 6, 1, 5, 7, 2]))





// 7 - misol


// let arr = [1, 2, 2, 3, 4, 5, 5];
// function deleteSameNum(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// let resultArr = deleteSameNum(arr);
// console.log(resultArr);




// 8 - misol


// function delateKM(arr, k, m) {
//   let result = []
//   for(let i = 0; i <= arr.length; i++) {
//     if(i < k || i > m) {
//       result.push(i)
//     }
//   }
//   return `[${result}] array uzunligi: ${result.length}`
// }


// console.log(delateKM([0,1,2,3,4,5,6,7,8,9], 3, 6))





// 9 - misol

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ]


// for(let elem of books) {
//   if(elem.alreadyRead) {
//     console.log(`${elem.author}ning "${elem.title}" kitobi o'qilgan`)
//   } else {
//     console.log(`${elem.author}ning "${elem.title}" kitobi o'qilmagan`)
//   }
// }




// 10 - misol


// let sum = 0
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];





// let prices = products.reduce((acc, val) => {
//   acc += val.price;
//   return acc;
// }, 0);

// let discounts = products.reduce((acc, val) => {
//   acc += val.discount;
//   return acc;
// }, 0);

// let result = prices - discounts;
// console.log(result);





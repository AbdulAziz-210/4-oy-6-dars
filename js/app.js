// let fruits = ['banana', 'ananas', 'mango', 'aplesin']

// let fruitsJoined = fruits.join('-');
// console.log(fruitsJoined);



// 1-masala


// function getInitialOdds(n) {
//     if (n < 1 || !Number.isInteger(n)) {
//         // n to'g'ri natural son emas yoki 1 dan kichik
//         console.error("N to'g'ri kiritilmagan!");
//         return [];
//     }

//     let oddsArray = [];
//     for (let i = 1; oddsArray.length < n; i += 2) {
//         // i toq son
//         oddsArray.push(i);
//     }

//     return oddsArray;
// }

// // Misol
// let n = 8;
// let initialOdds = getInitialOdds(n);
// console.log(initialOdds);




// function getInitialOdds (n) {
//     let arr = [];
//     for (let i = 1; i <= n * 2; i++) {
//         if(i % 2 !==0 ) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(getInitialOdds(4));


/////////----   uyga vazifa ----- \\\\\\\\\


// 1-masala



// function getLevel2(n) {
//     if (n < 0 || !Number.isInteger(n)) {
//         // n manfiy yoki to'g'ri natural son emas
//         console.error("N to'g'ri kiritilmagan!");
//         return [];
//     }

//     // Array.from() yordamida massivni yaratish
//     let level2Array = Array.from({ length: n + 1 }, (_, index) => 2 ** index);

//     return level2Array;
// }

// // Misol
// let n = 5;
// let level2Array = getLevel2(n);
// console.log(level2Array); // Natijada [1, 2, 4, 8, 16, 32]

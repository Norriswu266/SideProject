// function add(a, b) {
//     return a + b;
// }


// create a list of 100 random numbers between 1 and 1000
// find the sum of prime numbers in the list
// print the sum of prime number 

// 建立一個包含 100 個介於 1 到 1000 之間的隨機數字的清單
// 找出清單中所有質數的總和
// 印出質數總和



// 判斷陣列中的數字是否為質數，並回傳所有質數組成的新陣列
function addPrimeTest(arr) {
    return arr.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}

function generateRandomNumbers(count, min, max) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
} 
function sumOfPrimeNumbers(arr) {   
    const primeNumbers = addPrimeTest(arr);
    return primeNumbers.reduce((sum, num) => sum + num, 0);
}

const randomNumbers = generateRandomNumbers(100, 1, 1000);
const sumOfPrimes = sumOfPrimeNumbers(randomNumbers);
console.log("Random Numbers:", randomNumbers);
console.log("Sum of Prime Numbers:", sumOfPrimes);

module.exports = { addPrimeTest};


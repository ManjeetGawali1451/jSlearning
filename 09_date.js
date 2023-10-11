

const date = new Date();
console.log(date);

const square10 = Math.pow(10, 2);
console.log(square10);

const maxNum = Math.max(23.56, 67, 89, 90.567, 45, 67);
console.log(maxNum);

// 3! = 1 * 2 * 3 ==> 6
// 3! = 3 * 2 * 1 ==> 6
// 4! = 4 * 3 * 2 * 1 ==> 24
// 5! = 5 * 4 * 3 * 2 * 1 ==> 120 

function factorial(num){
    let factNum = 1; // 60 
    for (let index = num; index >=1; index--) {
        factNum = factNum * index;
    }
    console.log(`Factorial of ${num} is ${factNum} `);
}
factorial(5);
factorial(7);
factorial(10);
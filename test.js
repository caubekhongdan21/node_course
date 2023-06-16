var num1 = 10;
function test() {
    // Local Variable
    var num2 = 20;
    console.log(num2);
    // Global Variable Accessible inside function
    return num1 + num2;
}

if (true) {
    var num3 = 100;
}
console.log(num3);
console.log(num1);
// console.log(num2);
console.log(test());

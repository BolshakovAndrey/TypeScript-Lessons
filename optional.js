"use strict";
// const user4: User4 = {
//     login: 'a@a.com',
//     password: 'password123'
// }
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    else {
        return first * second;
    }
}
console.log(multiply(10, 2));
function testPass(user) {
    const t = user.password.type;
    // ! говорит что я уверен что не будет undefined
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
    // ?? означает что мы проверяем
    // если param = null  или undefined то выполняем multiply
}

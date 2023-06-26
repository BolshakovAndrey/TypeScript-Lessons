interface User4 {
    login: string;
    password?: string;  // добавляем знак вопроса для опциональности

}

// const user4: User4 = {
//     login: 'a@a.com',
//     password: 'password123'
// }

function multiply(first: number, second?: number ): number {
    if (!second) {
        return first * first
    } else {
        return first * second
    }
}
console.log(multiply(10,2))

interface UserPro {
    login: string;
    password?: {  // добавляем знак вопроса для опциональности
        type: 'primary' | 'secondary'
    };
}

function testPass(user: UserPro) {
    const t = user.password!.type;
    // ! говорит что я уверен что не будет undefined
}

function test(param?: string) {
    const t = param ?? multiply(5)
    // ?? означает что мы проверяем
    // если param = null  или undefined то выполняем multiply
}
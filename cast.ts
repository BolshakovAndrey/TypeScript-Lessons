let aa = 5;
let bb: string = a.toString();
let eE = new String(aa); // S! tring !!!
let ee = new String(aa).valueOf(); //  s! tring

let cc = 'sdf';
let dd: number = parseInt(cc);


interface User4 {
    name: string;
    email: string;
    login: string;
}

const user6: User4  = {
    name: 'David',
    email: 'david@gmail.com',
    login: 'David'
}

// преобразование из одного типа объекта в другой
interface Admin {
    name: string;
    role: string;
}

// используем "мапинг"
function userToAdmin(user: User4): Admin {
    return {
        name: user.name,
        role: '1'
    }
}
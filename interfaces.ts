interface User2 {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string
}

interface Role2 {
    roleId: number;
}

interface UserWithRole2 extends User2, Role2 {
    createdAt: Date;
}

let user2: UserWithRole2 = {
    name: 'test',
    age: 33,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),

    log(id: number) {
        return '';
    }
}


interface  UserDic {
    [index: number]: User
}

type  UserDic2 = {
    [index: number]: User
}


interface User3 {
    name: string;
}

interface User3 {
    age: number;
}

const user3: User3 = {
    name: 'test',
    age: 32
}
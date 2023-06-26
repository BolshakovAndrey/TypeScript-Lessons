type httpMethod = 'GET' | 'HEAD' | 'OPTIONS'

// Для объектов
type User = {
    name: string,
    age: number,
    skills:string[]
}
type Role = {
    id: number;
}

// Intersection пересечение
type UserWithRole = User & Role

let user1: UserWithRole = {
    name: 'name',
    age: 36,
    skills:['1', '2'],
    id: 1
};


type ID = string | number;



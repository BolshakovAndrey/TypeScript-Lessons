interface User5 {
    name: string;
    email: string;
    login: string;
}

const user7: User5 = {
    name: 'David',
    email: 'david@gmail.com',
    login: 'David'
}

interface Admin2 {
    name: string;
    role: number;
}

function logIn(id: string | number) {
    if (typeof id === 'string') {
        console.log(id)
    } else  {
        console.log(id)
    }
    id
}


function logInTypeGuard(id: string | number) {
    if (isString(id)) {
        console.log(id)
    } else  {
        console.log(id)
    }
}

// TypeGuard
function isString(x : string | number) : x is string {
    return typeof x === 'string';
}


function isAdmin(user: User5 | Admin2): user is Admin2 {
    return 'role' in user;
}

function isAdminAlternative(user: User5 | Admin2): user is Admin2 {
    return (user as Admin2).role !== undefined
}
function setRoleZero(user: User5 | Admin2) {
    if(isAdmin(user)) {
    // if(isAdminAlternative(user)) {
        user.role = 0;
    } else {
        // user
        throw new Error('Пользователь не админ')
    }
}
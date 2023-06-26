"use strict";
const user7 = {
    name: 'David',
    email: 'david@gmail.com',
    login: 'David'
};
function logIn(id) {
    if (typeof id === 'string') {
        console.log(id);
    }
    else {
        console.log(id);
    }
    id;
}
function logInTypeGuard(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
// TypeGuard
function isString(x) {
    return typeof x === 'string';
}
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        // if(isAdminAlternative(user)) {
        user.role = 0;
    }
    else {
        // user
        throw new Error('Пользователь не админ');
    }
}

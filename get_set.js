"use strict";
class getSetUser {
    constructor(login, password) {
        this._login = login;
        this._password = password;
    }
    // Принимает аргумент login.
    set login(login) {
        // Изменяет значение свойства _login, добавляя префикс "user_" к значению аргумента login.
        this._login = 'user_' + login;
    }
    get login() {
        // Возвращает значение свойства _login.
        return this._login;
    }
    set password(password) {
    }
}
const getsetuser = new getSetUser("login", "password");
console.log(getsetuser);
getsetuser.login = 'myLogin';
console.log(getsetuser.login);

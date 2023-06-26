class getSetUser {
    private _login: string;
    private _password: string;

    constructor(login: string, password: string) {
        this._login = login;
        this._password = password;
    }

    // Принимает аргумент login.
    set login(login: string) {
        // Изменяет значение свойства _login, добавляя префикс "user_" к значению аргумента login.
        this._login = 'user_' + login;
    }

    get login() {
        // Возвращает значение свойства _login.
        return this._login;
    }

    set password(password: string) {

    }
}

const getsetuser = new getSetUser("login", "password");
console.log(getsetuser);
getsetuser.login = 'myLogin';
console.log(getsetuser.login);

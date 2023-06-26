"use strict";
class Controller {
    // В отличие от интерфейса, можно реализовать не абстрактный
    // метод, который реализует некоторый функционал.
    handleWithLogs(req) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}
// new Controller - ошибка, так как он не создает инстанс
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
const c = new UserController();
c.handleWithLogs('Requests');

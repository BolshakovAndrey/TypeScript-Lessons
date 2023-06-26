abstract class Controller {
    abstract handle(req: any): void;
    // В отличие от интерфейса, можно реализовать не абстрактный
    // метод, который реализует некоторый функционал.
    handleWithLogs(req: any): void{
        console.log('Start')
        this.handle(req);
        console.log('End')
    }
}
// new Controller - ошибка, так как он не создает инстанс

class UserController extends Controller {
    handle(req: any): void {
        console.log(req)
    }
}

const c = new UserController();
c.handleWithLogs('Requests')

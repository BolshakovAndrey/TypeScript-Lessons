class UserService {
    static db: any; // без создания инстанса можно обращаться


    static getUser(id: number) {
        return this.db.findIndexed(id);
    }

    create() {
    }

    static {
        UserService.db = 'sdfasd'
    }
}

UserService.getUser(1);
UserService.db;

const inst = new UserService()
inst.create()
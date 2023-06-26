"use strict";
class UserService {
    static getUser(id) {
        return this.db.findIndexed(id);
    }
    create() {
    }
}
(() => {
    UserService.db = 'sdfasd';
})();
UserService.getUser(1);
UserService.db;
const inst = new UserService();
inst.create();

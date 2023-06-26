"use strict";
class MyPayment {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p = new MyPayment();
const my_user = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow
};
console.log(p.getDate());
console.log(my_user.paymentDate());
console.log(my_user.paymentDateArrow());
class MyPaymentPersistent extends MyPayment {
    save() {
        return super.getDate();
    }
}
// стрелочная функция работать не будет, так как ее нет в прототипе
console.log(new MyPaymentPersistent().save());
// =================================================================
// Типизация this
class UserBuilder {
    constructor() {
        this.name = '';
    }
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
    constructor() {
        super(...arguments);
        this.roles = [];
    }
}
const newMyUser = new UserBuilder().setName('David');
const admin = new AdminBuilder().setName('David');
let iUser = new UserBuilder();
if (iUser.isAdmin()) {
    console.log(iUser);
}
else {
    console.log(iUser);
}

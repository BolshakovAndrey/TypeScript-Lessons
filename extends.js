"use strict";
class IPayment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends IPayment {
    constructor(id) {
        super(id);
        id = Math.random();
        this.databaseId = id;
        this.paidAt = new Date();
    }
    save() {
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
class Customer {
    constructor() {
        this.name = 'customer';
        console.log(this.name);
    }
}
class Administrator extends Customer {
    constructor() {
        super();
        this.name = 'administrator';
        console.log(this.name);
    }
}
new Administrator();
new Error('');
class HTTPError extends Error {
    constructor(m, code) {
        super(m);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}

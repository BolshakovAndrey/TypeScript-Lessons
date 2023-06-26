"use strict";
class UserClass {
    constructor(name) {
        this.name = name;
    }
}
const newUser = new UserClass('David');
newUser.name = 'David';
console.log(newUser.name);
newUser.name = "Mike";
console.log(newUser.name);
// Methods
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Procesed"] = 1] = "Procesed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifetime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === PaymentStatus.Procesed) {
            throw new Error("Платеж не может быть возвращен");
        }
        else {
            this.status = PaymentStatus.Reversed;
            this.updatedAt = new Date();
        }
    }
}
const newPayment = new Payment(1);
newPayment.unholdPayment();
console.log(newPayment);
const time = newPayment.getPaymentLifetime();
console.log(newPayment);
console.log(time);

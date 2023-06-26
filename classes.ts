class UserClass {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const newUser = new UserClass('David')
newUser.name = 'David'
console.log(newUser.name)
newUser.name = "Mike"
console.log(newUser.name)


// Methods

enum PaymentStatus {
    Holded,
    Procesed,
    Reversed
}

class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.Holded;
    createdAt: Date = new Date();
    updatedAt: Date | undefined;

    constructor(id: number) {
        this.id = id;

    }

    getPaymentLifetime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment() {
        if (this.status === PaymentStatus.Procesed) {
            throw new Error("Платеж не может быть возвращен")
        } else {
            this.status = PaymentStatus.Reversed
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





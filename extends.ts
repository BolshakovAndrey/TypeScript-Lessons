type IPaymentStatus = 'new' | 'paid'

class IPayment {
    id: number;
    status: IPaymentStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = 'paid'
    }
}

class PersistedPayment extends IPayment {
    databaseId: number;
    paidAt: Date;

    constructor(id: number) {
        super(id);
        id = Math.random();
        this.databaseId = id
        this.paidAt = new Date()
    }

    save() {
    }

    override pay(date?: Date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}

class Customer {
    name: string = 'customer'

    constructor() {
        console.log(this.name)
    }
}

class Administrator extends Customer {
    name: string = 'administrator'

    constructor() {
        super();
        console.log(this.name)
    }
}

new Administrator();

new Error('')

class HTTPError extends Error {
    private code: number;

    constructor(m: string, code?: number) {
        super(m);
        this.code = code ?? 500;
    }
}


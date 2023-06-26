interface ILogger{
    log(...args: any): void;
    error(...args: any): void;
}

class Logger implements ILogger {
    log(...args: any): void {
        console.log(...args);
    }

    error(...args: any): void {
        console.error(...args);
    }
}

interface IDeletable {
    delete(): void;
}

interface IPayable {
    pay(paymentId:number): void;
    price?: number;
}
class Payer implements IPayable, IDeletable {
    pay(paymentId: number | string): void {
    }

    delete(): void {
    }
    // price?: number | number;
}
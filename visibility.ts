class Vehicle {
    public make: string;
    private damages: string[];
    private _model: string = ''; // Доступен только внутри класса
    protected runs: number = 0; // Доступен потомкам, закрыт из вне
    #price: number = 0;  // private

    constructor(make: string) {
        this.make = make;
        this.damages = [];
    }

    set model(model: string) {
        this._model = model;
        this.#price = 1000;
    }

    isPriceEqual(v: Vehicle) {
        return this.#price === v.#price;
    }

    get model() {
        return this._model;
    }

    addDamage(damage: string) {
        this.damages.push(damage);
    }
}

class EuroTruck extends Vehicle {
    setRun(km: number) {
        this.runs = km / 0.62
        // this.damages = не доступно
    }
}

const vehicle = new Vehicle('Some Make');
vehicle.model = 'Some Model';
vehicle.addDamage('Scratch');
const eurotruck = new EuroTruck('console')
eurotruck.setRun(100)
console.log(vehicle);
console.log(eurotruck);

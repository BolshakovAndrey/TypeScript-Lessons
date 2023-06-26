"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
class Vehicle {
    constructor(make) {
        this._model = ''; // Доступен только внутри класса
        this.runs = 0; // Доступен потомкам, закрыт из вне
        _Vehicle_price.set(this, 0); // private
        this.make = make;
        this.damages = [];
    }
    set model(model) {
        this._model = model;
        __classPrivateFieldSet(this, _Vehicle_price, 1000, "f");
    }
    isPriceEqual(v) {
        return __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(v, _Vehicle_price, "f");
    }
    get model() {
        return this._model;
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Vehicle_price = new WeakMap();
class EuroTruck extends Vehicle {
    setRun(km) {
        this.runs = km / 0.62;
        // this.damages = не доступно
    }
}
const vehicle = new Vehicle('Some Make');
vehicle.model = 'Some Model';
vehicle.addDamage('Scratch');
const eurotruck = new EuroTruck('console');
eurotruck.setRun(100);
console.log(vehicle);
console.log(eurotruck);

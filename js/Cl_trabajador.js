export default class Cl_trabajador {
    constructor(nombre, horasRegular, horasExtra) {
        this.nombre = nombre;
        this.horasRegular = horasRegular;
        this.horasExtra = horasExtra;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set horasRegular(horasRegular) {
        this._horasRegular = horasRegular;
    }
    get horasRegular() {
        return this._horasRegular;
    }
    set horasExtra(horasExtra) {
        this._horasExtra = horasExtra;
    }
    get horasExtra() {
        return this._horasExtra;
    }

    montoHorasRegular() {
        return this.horasRegular * 10;
    }

    montoHorasExtra() {
        return this.horasExtra * 25;
    }

    montoSalario() {
        return this.montoHorasRegular() + this.montoHorasExtra();
    }
}
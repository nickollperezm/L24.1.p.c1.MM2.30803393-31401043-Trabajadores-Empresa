export default class Cl_empresa {
    constructor() {
        this.acumMontoHorasExtra = 0;
        this.menorSalario = 9999;
        this.nombreMenor = "";
    }

    procesarTrabajador(trabajador) {
        this.acumMontoHorasExtra += trabajador.montoHorasExtra();
        if (trabajador.montoSalario() < this.menorSalario) {
            this.menorSalario = trabajador.montoSalario();
            this.nombreMenor = trabajador.nombre;
        }
    }

    montoTotalHorasExtra() {
        return this.acumMontoHorasExtra;
    }

    nombreMenorSalario() {
        return this.nombreMenor;
    }

    montoMenorSalario() {
        return this.menorSalario;
    }
}
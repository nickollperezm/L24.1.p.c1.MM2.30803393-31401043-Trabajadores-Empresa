/*
Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas
trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a
10$. y la hora en tiempo extra se paga a 25$. Se desea que el programa genere monto total
pagado por horas extras y nombre del trabajador con el menor salario obtenido.

Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas
regular, números de horas extra) (Mary, 30, 10), (José, 35, 5), (Carlos, 35, 0), (Pedro, 25, 10)

Monto total pagado por horas extras: 625$
Nombre del trabajador con el menor salario obtenido: Carlos con un salario de 350$
*/

import Cl_empresa from "./Cl_empresa.js";
import Cl_trabajador from "./Cl_trabajador.js";

let empresa = new Cl_empresa();
let trabajador1 = new Cl_trabajador("Mary", 30, 10);
let trabajador2 = new Cl_trabajador("José", 35, 5);
let trabajador3 = new Cl_trabajador("Carlos", 35, 0);
let trabajador4 = new Cl_trabajador("Pedro", 25, 10);
empresa.procesarTrabajador(trabajador1);
empresa.procesarTrabajador(trabajador2);
empresa.procesarTrabajador(trabajador3);
empresa.procesarTrabajador(trabajador4);

let salida = document.getElementById("salida");
salida.innerHTML = `
Monto total pagado por horas extras: ${empresa.montoTotalHorasExtra()}$
<br>Nombre del trabajador con el menor salario obtenido: ${empresa.nombreMenorSalario()} con un salario de ${empresa.montoMenorSalario()}$
`;
import React from 'react';

import './almanaque.css'

const Almanac = ({day,monthString,year,cantDiasMes,celdasVacias}) => {
  let days = []
  let cells = []
  let rows = []
  let diasDelMes = 1

  
  
  // crea un array con la cantidad de dias que tiene el mes actual.
  for(let i=1; i <= cantDiasMes; i++){
    days.push(i)
  }

let paginacion = days.slice(0,7)
console.log('slice', paginacion)

  // agrega las celdas vacias
  for (let i=1; i <= celdasVacias; i++){
    cells.push(<td></td>)
  }

  for(let i=1; i<= 7-celdasVacias; i++){
    diasDelMes++
    day === diasDelMes ? cells.push(<td style={{border: "1px solid green"}}>${diasDelMes}</td>) : cells.push(<td>${diasDelMes}</td>)
  }
rows.push(<tr>
  <td>1</td>
  <td>2</td>
  <td>3</td>
  <td>4</td>
  <td>5</td>
  <td>6</td>
  <td>7</td>
  </tr>)
rows.push(<tr>
  <td>8</td>
  <td>9</td>
  <td>10</td>
  <td>11</td>
  <td>12</td>
  </tr>)

  console.log(cells)
  console.log(rows)
//--------------------------

 

 
 
//--------------------------

  return (
    <div className="containerAlmanac">
      <table border="0">
          { <caption>{day} de {monthString} de {year} </caption>}
        <thead>
        <tr>
          <th>DO</th>
          <th>LU</th>
          <th>MA</th>
          <th>MI</th>
          <th>JU</th>
          <th>VI</th>
          <th>SA</th>
        </tr>
      </thead>
      <tbody>
        { rows }
      </tbody>
      </table>
    </div>
  );
}

export default Almanac;

/*
// Crear las filas del calendario
let rows = [];
let cells = [];

// Agregar celdas vacías para que el primer día del mes comience en el día correcto de la semana
for (let i = 0; i < celdasVacias; i++) {
  cells.push(<td key={`empty-${i}`}></td>);
}

console.log(cells)

days.forEach((date, i) => {
  cells.push(<td key={date}>{date}</td>);
  
  // Cada 7 celdas, o al final del array de días, agregamos una fila
  if ((i + celdasVacias) % 7 === 6 || i === days.length - 1) {
    rows.push(<tr key={`row-${i}`}>{cells}</tr>);
    cells = []; // Limpiamos las celdas para la siguiente fila
  }
});

*/
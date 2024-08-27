import React from 'react';

import './almanaque.css'

const Almanac = ({day,monthString,year,cantDiasMes,celdasVacias,handleAnt,handleNext,handleDay}) => {
  let days = []
  let cells = []
  let rows = []
  let diasDelMes = 0

  // crea un array con la cantidad de dias que tiene el mes actual.
  for(let i=1; i <= cantDiasMes; i++){
    days.push(i)
  }

  // agrega las celdas vacias
  for (let i=1; i <= celdasVacias; i++){
    cells.push(<td key={`vacias-${i}`} onClick={handleDay}></td>)
  }
  // Crea la primera fila con las vacias y las que tienen numero.
  for(let i=1; i<= 7-celdasVacias; i++){
    diasDelMes++
    day === diasDelMes ? cells.push(<td key={`day-${diasDelMes}`} style={{border: "1px solid green", borderRadius: "5px"}} onClick={handleDay}>{diasDelMes}</td>) : cells.push(<td key={`day-${diasDelMes}`} onClick={handleDay}>{diasDelMes}</td>)
  }
    rows.push(<tr key={`row-1`}>{cells}</tr>)

  for(let filas = 1; filas <= 6; filas++){
    cells = []
      for(let celdas = 1; celdas <= 7; celdas++){
        if ( diasDelMes >= cantDiasMes){
          cells.push(<td key={`empty-${filas}-${celdas}`}></td>);
      }else{  
        diasDelMes++
        day === diasDelMes ? cells.push(<td key={`day-${diasDelMes}`} style={{border: "1px solid green", borderRadius:"5px"}} onClick={handleDay}>{diasDelMes}</td>) : cells.push(<td key={`day-${diasDelMes}`} onClick={handleDay}>{diasDelMes}</td>)
      }
      }
      rows.push(<tr key={`row-${filas + 1}`}>{cells}</tr>)
  }

  return (
    <div className="containerAlmanac">
      <table border="0">
          { <caption><button className="btn-mes" onClick={handleAnt}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg></button>{day} de {monthString} de {year}<button className="btn-mes" onClick={handleNext}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg></button></caption>}
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


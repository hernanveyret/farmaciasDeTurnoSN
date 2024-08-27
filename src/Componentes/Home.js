import React, { useState, useEffect } from 'react';
import Almanac from './Almanac';

import './home.css';

const Home = () => {
  const meces = [
    {
      id: 0,
      mes:"Enero"
    },
    {
      id: 1,
      mes:"Febrero"
    },
    {
      id: 2,
      mes:"Marzo"
    },
    {
      id: 3,
      mes:"Abril"
    },
    {
      id: 4,
      mes:"Mayo"
    },
    {
      id: 5,
      mes:"Junio"
    },
    {
      id: 6,
      mes:"Julio"
    },
    {
      id: 7,
      mes:"Agosto"
    },
    {
      id: 8,
      mes:"Septiembre"
    },
    {
      id: 9,
      mes:"Octubre"
    },
    {
      id: 10,
      mes:"Noviembre"
    },
    {
      id: 11,
      mes:"Diciembre"
    },
  ]
  
  const [ fecha, setFecha ] = useState(new Date());
  const [ day, setDay ] = useState(fecha.getDate()); // dia en numero.
  const [ dayString, setDayString ] = useState(fecha.toLocaleString('es-ES', { weekday: 'long' }));
  const [ month, setMonth ] = useState(fecha.getMonth()); // mes en numero.
  //const [ monthString, setMonthString ] = useState(fecha.toLocaleString('es-ES', { month: 'long' }))
  const [ monthString, setMonthString ] = useState(meces.find(m => m.id === month).mes)
  const [ year, setYear ] = useState(fecha.getFullYear()); // año
  const [ cantDiasMes, setCantDiasMes ] = useState(new Date(year, month + 1, 0).getDate()); // Ultimo dia del mes anterior
  const [ celdasVacias, setCeldasVacias ] = useState(new Date(year, month, 1).getDay()) // Posicion del primer dia del mes, del 0 al 6, dom-lun...
  /*
  console.log('dia:', day)
  console.log('dia string:',dayString)
  console.log('mes:', month)
  console.log('mes string:', monthString)
  console.log('año:', year)
  */
 console.log('ultimo dia del mes anterior', cantDiasMes) // ultimo dia del mes anterior
 console.log('celvas vacias', celdasVacias); // posicion del primer dia del mes del 0 al 6.

  const handleAnt = () => {
    console.log('anterior')
    setMonth(month - 1);
    
  }
  
  const handleNext = () => {
    console.log('siguiente')
     setMonth(month + 1);
    
  }

  useEffect(() => {
    setCantDiasMes(new Date(year, month + 1, 0).getDate())
    setCeldasVacias(new Date(year, month, 1).getDay())
    setMonthString(meces.find(m => m.id === month).mes)
    console.log(cantDiasMes)
    console.log(celdasVacias)
  },[month,year])

  // el metodo trim() elimina los espacios vacios de lo que traiga el target
  const handleDay = (e) => {
    let textContent = e.currentTarget.textContent.trim();
    if (textContent !== '') {      
      textContent = parseInt(textContent)
      setDay(textContent)
    }
  };
  
  return (
    <div className="containerHome">
      <header>
        <h1>Farmacias de turno SN</h1>
      </header>
      <main>
        <article className="almanaque">
             <Almanac 
                day={day}  
                monthString={monthString} 
                year={year} 
                cantDiasMes={cantDiasMes} 
                celdasVacias={celdasVacias} 
                handleAnt={handleAnt} 
                handleNext={handleNext} 
                handleDay={handleDay} 
            />
        </article>
        <article className="farmacias">
            <p>farmacias</p>
        </article>
      </main>
      <footer>
        <p>Hernán Luis Veyret-2024</p>
      </footer>
      <button className="btnSettings"></button>
    </div>
  )
}

export default Home;
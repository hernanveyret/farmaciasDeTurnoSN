import React, { useState } from 'react';
import Almanac from './Almanac';

import './home.css';

const Home = () => {
  const [ fecha, setFecha ] = useState(new Date());
  const [ day, setDay ] = useState(fecha.getDate()); // dia en numero.
  const [ dayString, setDayString ] = useState(fecha.toLocaleString('es-ES', { weekday: 'long' }));
  const [ month, setMonth ] = useState(fecha.getMonth()); // mes en numero.
  const [ monthString, setMonthString ] = useState(fecha.toLocaleString('es-ES', { month: 'long' }))
  const [ year, setYear ] = useState(fecha.getFullYear()); // año
  const [ cantDiasMes, setCantDiasMes ] = useState(new Date(year, month + 1, 0).getDate())
  const [ celdasVacias, setSeldasVacias ] = useState(new Date(year, month, 1).getDay())

  
  console.log('dia:', day)
  console.log('dia string:',dayString)
  console.log('mes:', month)
  console.log('mes string:', monthString)
  console.log('año:', year)
  console.log('ultimo dia del mes anterior', cantDiasMes)
  console.log('celvas vacias', celdasVacias)

  return (
    <div className="containerHome">
      <header>
        <h1>Farmacias de turno SN</h1>
      </header>
      <main>
        <article className="almanaque">
             <Almanac day={day} monthString={monthString} year={year} cantDiasMes={cantDiasMes} celdasVacias={celdasVacias} />
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
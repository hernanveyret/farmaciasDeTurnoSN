import React from 'react';
import './home.css';
const Home = () => {
  return (
    <div className="containerHome">
      <header>
        <h1>Farmacias de turno S.N.</h1>
      </header>
      <main>
        <article className="almanaque">
            <p>almanaque</p>
        </article>
        <article className="farmacias">
            <p>farmacias</p>
        </article>
      </main>
      <footer>
        <p>Hernán Luis Veyret-2024</p>
      </footer>
    </div>
  )
}

export default Home;
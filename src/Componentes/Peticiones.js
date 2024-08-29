import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './peticiones.css';

const Peticiones = ({day,month,year}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Solicita datos al servidor Express, que a su vez solicita a la API externa
    axios.get(`/api/farmacias/${year}/${month}/${day}`)
      .then(response => {
        setData(response.data);
        console.log(response.data)
        console.log(response.data.pharmacies)
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setError('Hubo un error al obtener los datos.');
      });
  }, [day,month,year]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="containerFarmacias">
      {
        data.pharmacies.map((e, i) => (
          <div className="items" key={i}>
          <p>{e.name}</p>
          <p>{e.address}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Peticiones;

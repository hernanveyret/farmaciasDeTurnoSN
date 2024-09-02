const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/farmacias/:year/:month/:day', async (req, res) => {
  const { year, month, day } = req.params;
  const apiUrl = `https://www.laguiasn.com.ar/api/pharmacies/${year}/${month}/${day}`;

  try {
    // Hacer la solicitud a la API externa desde tu servidor
    const response = await axios.get(apiUrl);
    
    // Enviar la respuesta de la API externa al cliente
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Escuchando el puerto http://localhost:${PORT}`);
});

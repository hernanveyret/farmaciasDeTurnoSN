import React from 'react';
import './settings.css';
const Settings = ({setSettings}) => {
  return (
    <div className="containerSettings">
      <button className="btn-cerrar-settings" onClick={() => {setSettings(false)}}>X</button>
      <h2>Configuraciones</h2>
    </div>
  )
}
export default Settings;
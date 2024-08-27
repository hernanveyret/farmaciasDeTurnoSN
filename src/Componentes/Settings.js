import React from 'react';
import './settings.css';
const Settings = ({settingOptions}) => {
  return (
    <div className="containerSettings" id="panelSetting">
      <button className="btn-cerrar-settings" onClick={settingOptions}>X</button>
      <div className="nav"><h3>Configuraciones</h3></div>
      <nav>
        <form>
          <label><div>Nodo nocturno <input type="radio" name="settingRadio" id="nocturno" /></div></label>
          <label><div>Por mes<input type="radio" name="settingRadio" id="mes" /></div></label>
          <label><div>Por dia<input type="radio" name="settingRadio" id="dia"/></div></label>
        </form>
      </nav>
    </div>
  )
}
export default Settings;
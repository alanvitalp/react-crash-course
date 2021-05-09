import React from 'react';
import StyledNightmode from '../styles/StyledNightMode';

const NightMode = ({ nightModeCallback, NightMode }) => {
  return (
    <StyledNightmode>
      <span>Nightmode: </span>
      <label className="switch">
        <input type="checkbox" checked={NightMode} onchange={nightModeCallback}/>
        <span className="slider round"></span>
      </label>
    </StyledNightmode>
  )
}

export default NightMode;
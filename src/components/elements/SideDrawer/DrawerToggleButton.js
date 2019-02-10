import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => {
  let lineClass;
  if (props.show) lineClass = 'open';

  return (
    <div id="toggle-button" className={lineClass} onClick={props.click}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default DrawerToggleButton;

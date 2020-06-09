import React from 'react';
import { Link } from 'react-router-dom';

class ButtonToConfig extends React.Component {
  render() {
    return (
      <div>
        <Link to="/Configuration" data-testid="btn-settings">CONFIGURAR</Link>
      </div>
    );
  }
}

export default ButtonToConfig;

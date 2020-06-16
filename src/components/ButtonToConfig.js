import React from 'react';
import { Link } from 'react-router-dom';

class ButtonToConfig extends React.Component {
  render() {
    return (
      <div>
        <Link to="/Configuration" data-testid="btn-settings" className="btn btn-secondary btn-block mb-3">CONFIGURAR</Link>
      </div>
    );
  }
}

export default ButtonToConfig;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { generateToken } from '../actions/index';

class LoginArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
    this.requestAPIToken = this.requestAPIToken.bind(this);
  }

  componentDidUpdate() {
    console.log('entrouNoDidUpdate');
    const { tolkien } = this.props;
    localStorage.setItem('token', tolkien);
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  changeEmail(e) {
    this.setState({ email: e.target.value });
  }

  isDisabled() {
    const { name, email } = this.state;
    if (name === '' || email === '') return true;
    return false;
  }

  requestAPIToken() {
    const { storeToken } = this.props;
    storeToken();
  }

  render() {
    const { name, email } = this.state;
    return (
      <div className="login-area">
        <label htmlFor="name">E-mail do Gravatar</label>
        <input
          type="text"
          data-testid="input-player-name"
          id="name"
          onChange={(e) => this.changeName(e)}
          value={name}
        />
        <label htmlFor="email">Nome do Jogador</label>
        <input
          type="email"
          data-testid="input-gravatar-email"
          id="email"
          onChange={(e) => this.changeEmail(e)}
          value={email}
        />
        <button
          type="button"
          className="btn-play"
          data-testid="btn-play"
          onClick={this.requestAPIToken}
          disabled={this.isDisabled()}
        >
          JOGAR
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeToken: () => dispatch(generateToken()),
});

const mapStateToProps = (state) => ({
  tolkien: state.apiReducer.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginArea);

LoginArea.propTypes = {
  storeToken: PropTypes.func.isRequired,
  tolkien: PropTypes.shape({ token: '' }).isRequired,
};

import React, { Component } from 'react';
import md5 from 'md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { generateToken, getUserData } from '../actions/index';

class LoginArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      avatar: '',
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
    const hash = md5(e.target.value);
    this.setState({ email: e.target.value, avatar: hash });
  }

  isDisabled() {
    const { name, email } = this.state;
    if (name === '' || email === '') return true;
    return false;
  }

  requestAPIToken() {
    const { storeToken, saveUserData } = this.props;
    const { name, avatar } = this.state;
    storeToken();
    saveUserData(name, avatar);
  }

  render() {
    const { name, email, avatar } = this.state;
    return (
      <div className="login-area">
        <label htmlFor="name">Nome do Jogador</label>
        <input
          type="text"
          data-testid="input-player-name"
          id="name"
          onChange={(e) => this.changeName(e)}
          value={name}
        />
        <label htmlFor="email">E-mail do Gravatar</label>
        <input
          type="email"
          data-testid="input-gravatar-email"
          id="email"
          onChange={(e) => this.changeEmail(e)}
          value={email}
        />
        <img src={`https://www.gravatar.com/avatar/${avatar}`} alt="avatar" />
        <Link to="/gamepage">
          <button
            type="button"
            className="btn-play"
            data-testid="btn-play"
            onClick={this.requestAPIToken}
            disabled={this.isDisabled()}
          >
            JOGAR
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeToken: () => dispatch(generateToken()),
  saveUserData: (name, avatar) => dispatch(getUserData(name, avatar)),
});

const mapStateToProps = (state) => ({
  tolkien: state.apiReducer.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginArea);

LoginArea.propTypes = {
  storeToken: PropTypes.func.isRequired,
  saveUserData: PropTypes.func.isRequired,
  tolkien: PropTypes.shape({ token: '' }).isRequired,
};

import React, { Component } from 'react';
import md5 from 'md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ButtonToConfig from './ButtonToConfig';
import { generateToken, getUserData } from '../actions/index';

class LoginArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      avatar: '',
    };
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

  clickToStartGame() {
    const { storeToken, saveUserData } = this.props;
    const { name, avatar, email } = this.state;
    storeToken();
    saveUserData(name, avatar);
    const storage = {
      player: {
        name,
        assertions: 0,
        score: 0,
        gravatarEmail: email,
      },
    };
    localStorage.setItem('state', JSON.stringify(storage));
    const blankStorage = JSON.parse(localStorage.getItem('ranking'));
    if (!blankStorage) localStorage.setItem('ranking', JSON.stringify([]));
  }

  renderNameInput() {
    const { name } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="name">Nome do Jogador</label>
        <input
          className="form-control"
          type="text"
          data-testid="input-player-name"
          id="name"
          onChange={(e) => this.changeName(e)}
          value={name}
        />
      </div>
    );
  }

  renderEmailInput() {
    const { email } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="email">E-mail do Gravatar</label>
        <input
          type="email"
          className="form-control"
          data-testid="input-gravatar-email"
          id="email"
          onChange={(e) => this.changeEmail(e)}
          value={email}
        />
      </div>
    );
  }

  render() {
    const { avatar } = this.state;
    return (
      <form className="mt-3">
        <img className="rounded" src={`https://www.gravatar.com/avatar/${avatar}`} alt="avatar" />
        {this.renderNameInput()}
        {this.renderEmailInput()}
        <Link to="/gamepage">
          <button
            type="button"
            className="btn btn-primary btn-block mb-3"
            data-testid="btn-play"
            onClick={() => this.clickToStartGame()}
            disabled={this.isDisabled()}
          >
            JOGAR
          </button>
          <ButtonToConfig />
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeToken: () => dispatch(generateToken()),
  saveUserData: (name, avatar) => dispatch(getUserData(name, avatar)),
});

export default connect(null, mapDispatchToProps)(LoginArea);

LoginArea.propTypes = {
  storeToken: PropTypes.func.isRequired,
  saveUserData: PropTypes.func.isRequired,
};

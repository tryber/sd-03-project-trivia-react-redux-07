import React, { Component } from 'react';
import md5 from 'md5';

export default class LoginArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      url: '',
    };
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  changeEmail(e) {
    const hash = md5(e.target.value);
    this.setState({ email: e.target.value, url: hash });
  }

  isDisabled() {
    const { name, email } = this.state;
    if (name === '' || email === '') return true;
    return false;
  }

  startGame() {

  }

  render() {
    const { name, email, url } = this.state;
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
        <img src={`https://www.gravatar.com/avatar/${url}`} alt="avatar" />
        <button
          type="button"
          className="btn-play"
          data-testid="btn-play"
          onClick={() => this.startGame()}
          disabled={this.isDisabled()}
        >
          JOGAR
        </button>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class LoginArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
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
          disabled={this.isDisabled()}
        >
          JOGAR
        </button>
      </div>
    );
  }
}

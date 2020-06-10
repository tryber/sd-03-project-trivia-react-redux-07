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
    const { storeToken, saveUserData, tolkien } = this.props;
    const { name, avatar } = this.state;
    storeToken();
    localStorage.setItem('token', tolkien);
    saveUserData(name, avatar);
  }

  renderNameInput() {
    const { name } = this.state;
    return (
      <div>
        <label htmlFor="name">Nome do Jogador</label>
        <input
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
      <div>
        <label htmlFor="email">E-mail do Gravatar</label>
        <input
          type="email"
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
      <div className="login-area">
        {this.renderNameInput()}
        {this.renderEmailInput()}
        <img src={`https://www.gravatar.com/avatar/${avatar}`} alt="avatar" />
        <Link to="/gamepage">
          <button
            type="button"
            className="btn-play"
            data-testid="btn-play"
            onClick={() => this.clickToStartGame()}
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

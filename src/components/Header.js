import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userData, score } = this.props;
    return (
      <div className="questions-header">
        {userData && (
        <img
          src={`https://www.gravatar.com/avatar/${userData.avatar}`}
          data-testid="header-profile-picture"
          alt="avatar"
        />
        )}
        {userData && <p data-testid="header-player-name">{`Jogador: ${userData.name}`}</p>}
        <p data-testid="header-score">{`Pontos: ${score}`}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.loginReducer[0],
  score: state.scoreReducer,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object).isRequired,
  score: PropTypes.number.isRequired,
};

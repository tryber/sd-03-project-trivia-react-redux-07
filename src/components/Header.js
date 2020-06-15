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
        <div>
          <span>Pontos:</span>
          <span data-testid="header-score">{score}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.loginReducer[0],
  score: state.scoreReducer.points,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object),
  score: PropTypes.number.isRequired,
};
Header.defaultProps = {
  userData: [],
};

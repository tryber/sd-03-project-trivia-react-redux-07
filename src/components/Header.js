import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const { userData, score } = this.props;
    return (
      <div className="questions-header row bg-dark align-items-center">
        <div className="container">
          <div className="media">
            {userData && (
              <img
                className="mr-3 rounded"
                src={`https://www.gravatar.com/avatar/${userData.avatar}`}
                data-testid="header-profile-picture"
                alt="avatar"
              />
            )}
            {userData && (
              <div className="media-body">
                <p
                  data-testid="header-player-name"
                  className="h4 text-white"
                >{`Jogador: ${userData.name}`}</p>
                <p className="text-white">
                  Pontos:
                  <span data-testid="header-score" className="text-white ml-2">
                    {score}
                  </span>
                </p>
              </div>
            )}
          </div>
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

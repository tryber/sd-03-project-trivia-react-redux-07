import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { clearLoginInfo } from '../actions/index';


class RankingScreen extends Component {
  restartGame() {
    const { clearlogin } = this.props;
    clearlogin();
  }

  render() {
    const { ranking } = this.props;
    return (
      <div>
        {ranking.sort(function (a, b) { return b.score - a.score; }).map((e) => (
          <div>
            <img src={`https://www.gravatar.com/avatar/${e.avatar}`} alt="avatar" />
            <span>{e.name}</span>
            <span>{e.score}</span>
          </div>
        ))}
        <Link to="/">
          <button
            onClick={() => this.restartGame()}
            type="button"
          >
            Início
          </button>
        </Link>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  ranking: state.rankingReducer,
});

const mapDispatchToProps = (dispatch) => ({
  clearlogin: () => dispatch(clearLoginInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RankingScreen);

RankingScreen.propTypes = {
  ranking: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    avatar: PropTypes.string,
  }).isRequired,
  clearlogin: PropTypes.func.isRequired,
};

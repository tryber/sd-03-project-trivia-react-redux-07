import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class RankingScreen extends Component {
  render() {
    const { ranking } = this.props;
    return (
      <div className="container">
        <h1 className="display-3 text-center" data-testid="ranking-title">RANKING</h1>
        <ul className="list-group mb-4">
          {ranking.sort(function (a, b) { return b.score - a.score; }).map((e, i) => (
            <li className="list-group-item">
              <img className="rounded" src={`https://www.gravatar.com/avatar/${e.avatar}`} alt="avatar" />
              <span className="lead px-3" data-testid={`player-name-${i}`}>{e.name}</span>
              <span className="badge badge-primary px-3" data-testid={`player-score-${i}`}>{e.score}</span>
            </li>
          ))}
        </ul>
        <Link to="/">
          <button
            className="btn btn-primary"
            type="button"
            data-testid="btn-go-home"
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

export default connect(mapStateToProps)(RankingScreen);

RankingScreen.propTypes = {
  ranking: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    avatar: PropTypes.string,
  }).isRequired,
};

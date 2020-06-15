import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
import FeedbackAnswears from './FeedbackAnswears';
import { clearLoginInfo, clearLoginPoints } from '../actions/index';

class Feedback extends React.Component {
  restartGame() {
    const { clearlogin } = this.props;
    clearlogin();
  }

  newGame() {
    const { clearpoints } = this.props;
    clearpoints();
  }

  render() {
    const { totalAns, scorePoints } = this.props;
    return (
      <div>
        <Header />
        <FeedbackAnswears totalAnswears={totalAns} />
        <div>
          <span>Você acertou</span>
          <span data-testid="feedback-total-question">{totalAns}</span>
          <span>questões</span>
        </div>
        <div>
          <span>Fez um total de</span>
          <span data-testid="feedback-total-score">{scorePoints}</span>
          <span>pontos</span>
        </div>
        <Link to="/gamepage">
          <button type="button" onClick={() => this.newGame()} data-testid="btn-play-again">
            Jogar novamente
          </button>
        </Link>
        <Link to="/rankingscreen">
          <button type="button" onClick={() => this.restartGame()} data-testid="btn-ranking">
            Ver Ranking
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  totalAns: state.scoreReducer.answers,
  scorePoints: state.scoreReducer.points,
});

const mapDispatchToProps = (dispatch) => ({
  clearlogin: () => dispatch(clearLoginInfo()),
  clearpoints: () => dispatch(clearLoginPoints()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  totalAns: PropTypes.number.isRequired,
  scorePoints: PropTypes.number.isRequired,
  clearlogin: PropTypes.func.isRequired,
  clearpoints: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
import FeedbackAnswears from './FeedbackAnswears';
import { clearLoginInfo } from '../actions/index';

class Feedback extends React.Component {
  restartGame() {
    const { clearlogin } = this.props;
    clearlogin();
  }

  render() {
    const { totalAns, scorePoints } = this.props;
    return (
      <div>
        <Header />
        <FeedbackAnswears totalAnswears={totalAns} />
        <p data-testid="feedback-total-question">{`Você acertou ${totalAns} questões!`}</p>
        <p data-testid="feedback-total-score">{`Fez um total de ${scorePoints} pontos`}</p>
        <Link to="/gamepage">
          <button type="button" onClick={() => this.restartGame()} data-testid="btn-play-again">
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  totalAns: PropTypes.number.isRequired,
  scorePoints: PropTypes.number.isRequired,
  clearlogin: PropTypes.func.isRequired,
};

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

  tryAgain() {
    return (
      <Link to="/gamepage">
        <button className="btn btn-primary btn-lg m-2" type="button" onClick={() => this.newGame()}>Tentar novamente</button>
      </Link>
    );
  }

  render() {
    const { totalAns, scorePoints } = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="jumbotron mt-3">
            <FeedbackAnswears totalAnswears={totalAns} />
            <div p-3>
              <span className="lead">Você acertou </span>
              <span className="lead" data-testid="feedback-total-question">{totalAns}</span>
              <span className="lead"> questões</span>
            </div>
            <div p-3 mb-3>
              <span className="lead">Fez um total de </span>
              <span className="lead" data-testid="feedback-total-score">{scorePoints}</span>
              <span className="lead"> pontos</span>
              <hr />
            </div>
            {this.tryAgain()}
            <Link to="/">
              <button className="btn btn-primary btn-lg m-2" type="button" onClick={() => this.restartGame()} data-testid="btn-play-again">
                Jogar novamente
              </button>
            </Link>
            <Link to="/rankingscreen">
              <button className="btn btn-info btn-lg m-2" type="button" onClick={() => this.restartGame()} data-testid="btn-ranking">
                Ver Ranking
              </button>
            </Link>
          </div>
        </div>
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

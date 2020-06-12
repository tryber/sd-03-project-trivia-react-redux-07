import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  generateQuestions, updateScore, restoreClock, updateRanking, countRight,
} from '../actions/index';
import Clock from './Clock';

import './Quiz.css';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      questionClicked: false,
      Arranswer: [],
      shuffle: true,
    };
  }

  componentDidMount() {
    const { restore } = this.props;
    restore();
    this.loadQuestions();
  }

  rightChoice() {
    const { countRightA } = this.props;
    this.saveLocalStorage();
    countRightA();
    this.setState({ questionClicked: true });
  }

  wrongChoice() {
    this.setState({ questionClicked: true });
  }

  callAnswers() {
    const { Arranswer } = this.state;
    const test = Arranswer;
    return test;
  }

  beforeTheCLick() {
    let count = -1;
    this.shuffleAnswers();
    return (
      this.callAnswers().map((e) => {
        if (e[1] === 'correct') {
          return (
            <button type="button" data-testid="correct-answer" onClick={() => this.rightChoice()}>
              {e[0]}
            </button>
          );
        }
        count += 1;
        return (
          <button
            type="button"
            data-testid={`wrong-answer${count}`}
            onClick={() => this.wrongChoice()}
          >
            {e}
          </button>
        );
      })
    );
  }

  afterTheCLick() {
    let count = -1;
    return (
      this.callAnswers().map((e) => {
        if (e[1] === 'correct') {
          return (
            <button type="button" data-testid="correct-answer" className="Correct" disabled>
              {e[0]}
            </button>
          );
        }
        count += 1;
        return (
          <button type="button" data-testid={`wrong-answer${count}`} className="Wrong" disabled>
            {e}
          </button>
        );
      })
    );
  }

  nextButton() {
    const { index } = this.state;
    return (
      <div>
        {(index < 4) && (
          <button
            type="button"
            onClick={() => this.clickToNext()}
            data-testid="btn-next"
          >
            Próxima
          </button>
        )}
        {(index === 4) && (
          <Link to="/feedback">
            <button type="button" onClick={() => this.finishQuestions()}>
              Próxima
            </button>
          </Link>
        )}
      </div>
    );
  }

  loadQuestions() {
    const { tolkien, getQuestions } = this.props;
    getQuestions(tolkien);
  }

  clickToNext() {
    const { restore } = this.props;
    restore();
    this.setState((state) => ({
      index: state.index + 1,
      questionClicked: false,
      shuffle: true,
    }));
  }

  shuffleAnswers() {
    const { questions } = this.props;
    const { index, shuffle } = this.state;
    const orderedAnswers = [...questions[index].incorrect_answers, [questions[index].correct_answer, 'correct']];
    const newOrderedAnswers = orderedAnswers.sort(() => Math.random() - 0.5);
    if (shuffle) {
      this.setState({
        shuffle: false,
        Arranswer: newOrderedAnswers,
      });
    }
  }

  calculatePoints() {
    const { sumPoints, time, questions } = this.props;
    const { index } = this.state;
    let difPoints;
    const { difficulty } = questions[index];
    if (difficulty === 'hard') { difPoints = 3; }
    if (difficulty === 'medium') { difPoints = 2; }
    if (difficulty === 'easy') { difPoints = 1; }
    const points = 10 + (time * difPoints);
    sumPoints(points);
    return points;
  }

  saveLocalStorage() {
    const points = this.calculatePoints();
    let storage = JSON.parse(localStorage.getItem('state'));
    storage = {
      player: {
        ...storage.player,
        assertions: storage.player.assertions + 1,
        score: storage.player.score + points,
      },
    };
    localStorage.setItem('state', JSON.stringify(storage));
  }

  finishQuestions() {
    const {
      sendScoreToRanking, name, avatar, score,
    } = this.props;
    sendScoreToRanking(name, avatar, score);
    const rankingStored = JSON.parse(localStorage.getItem('ranking'));
    const newRanking = [...rankingStored, { name, score, picture: `https://www.gravatar.com/avatar/${avatar}` }];
    localStorage.setItem('ranking', JSON.stringify(newRanking));
  }

  render() {
    const { questions } = this.props;
    const { index, questionClicked } = this.state;
    if (questions.length > 0) {
      return (
        <div>
          <p data-testid="question-category">{`Categoria: ${questions[index].category}`}</p>
          <p data-testid="question-text">{questions[index].question}</p>
          {(questionClicked) ? this.afterTheCLick() : this.beforeTheCLick() }
          {(questionClicked) ? this.nextButton() : null }
          <Clock />
        </div>
      );
    }
    return (
      <p>Loading Questions</p>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (e) => dispatch(generateQuestions(e)),
  sumPoints: (points) => dispatch(updateScore(points)),
  restore: () => dispatch(restoreClock()),
  sendScoreToRanking: (name, avatar, score) => dispatch(updateRanking(name, avatar, score)),
  countRightA: () => dispatch(countRight()),
});

const mapStateToProps = (state) => ({
  tolkien: state.apiReducer.token,
  questions: state.apiReducer.questions,
  time: state.counterReducer.count,
  name: state.loginReducer[0].name,
  avatar: state.loginReducer[0].avatar,
  score: state.scoreReducer.points,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

Quiz.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  tolkien: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  restore: PropTypes.func.isRequired,
  sumPoints: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sendScoreToRanking: PropTypes.func.isRequired,
  countRightA: PropTypes.func.isRequired,
};

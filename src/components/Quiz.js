import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  generateQuestions, updateScore, restoreClock, updateRanking, countRight,
} from '../actions/index';
import Clock from './Clock';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      disabled: false,
      shuffle: true,
      answers: [],
    };
  }

  componentDidMount() {
    const { restore } = this.props;
    restore();
    this.loadQuestions();
  }

  loadQuestions() {
    const { tolkien, getQuestions } = this.props;
    getQuestions(tolkien);
  }

  clickToNext() {
    const { restore } = this.props;
    restore();
    this.setState((state) => ({ index: state.index + 1, disabled: false, shuffle: true }));
  }

  shuffleAnswers() {
    const { questions } = this.props;
    const { index, shuffle, answers } = this.state;
    const orderedAnswers = [...questions[index].incorrect_answers, [questions[index].correct_answer, 'correct']];
    orderedAnswers.sort(() => Math.random() - 0.5);
    if (shuffle) {
      this.setState({ shuffle: false, answers: orderedAnswers });
    }
    return answers;
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

  clickRigthAnswer() {
    const { countRightA } = this.props;
    this.saveLocalStorage();
    countRightA();
    this.setState({ disabled: true });
  }

  clickWrongAnswer() {
    this.setState({ disabled: true });
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
    const { index, disabled } = this.state;
    if (questions.length > 0) {
      return (
        <div>
          <p data-testid="question-category">{`Categoria: ${questions[index].category}`}</p>
          <p data-testid="question-text">{questions[index].question}</p>
          {this.shuffleAnswers().map((e, i) => {
            if (e[1] === 'correct') {
              i -= 1;
              return <button type="button" disabled={disabled} onClick={() => this.clickRigthAnswer()} data-testid="correct-answer">{e[0]}</button>;
            }
            return <button type="button" disabled={disabled} onClick={() => this.clickWrongAnswer()} data-testid={`wrong-answer${i}`}>{e}</button>;
          })}
          {(index < 4) && <button type="button" onClick={() => this.clickToNext()}>Próxima</button>}
          {(index === 4) && <Link to="/feedback"><button type="button" onClick={() => this.finishQuestions()}>Próxima</button></Link>}
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

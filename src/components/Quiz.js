import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  generateQuestions, updateScore, restoreClock, getDifficulty,
} from '../actions/index';
import Clock from './Clock';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      disabled: false,
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
    this.setState((state) => ({ index: state.index + 1, disabled: false }));
  }

  shuffleAnswers() {
    const { questions } = this.props;
    const { index } = this.state;
    const orderedAnswers = [...questions[index].incorrect_answers, [questions[index].correct_answer, 'correct']];
    return orderedAnswers.sort(() => Math.random() - 0.5);
  }

  clickRigthAnswer() {
    const { sumPoints, time, questions } = this.props;
    const { index } = this.state;
    let difPoints;
    const { difficulty } = questions[index];
    if (difficulty === 'hard') { difPoints = 3; }
    if (difficulty === 'medium') { difPoints = 2; }
    if (difficulty === 'easy') { difPoints = 1; }
    const points = 10 + (time * difPoints);
    this.setState({ disabled: true });
    sumPoints(points);
    const storage = JSON.parse(localStorage.getItem('playerInfo'));
    const newStorage = {
      player: {
        name: storage.player.name,
        assertions: storage.player.assertions + 1,
        score: storage.player.score + points,
        gravatarEmail: storage.player.gravatarEmail,
      },
    };
    localStorage.setItem('playerInfo', JSON.stringify(newStorage));
  }

  clickWrongAnswer() {
    this.setState({ disabled: true });
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
          {(index === 4) && <button type="button">Finalizar</button>}
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
  setDifficulty: (e) => dispatch(getDifficulty(e)),
});

const mapStateToProps = (state) => ({
  tolkien: state.apiReducer.token,
  questions: state.apiReducer.questions,
  difficulty: state.difficultyReducer,
  time: state.counterReducer.count,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

Quiz.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  tolkien: PropTypes.string.isRequired,
  restore: PropTypes.func.isRequired,
};

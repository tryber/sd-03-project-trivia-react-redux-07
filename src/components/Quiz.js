import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { generateQuestions, updateScore } from '../actions/index';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    this.loadQuestions();
  }

  loadQuestions() {
    const { tolkien, getQuestions } = this.props;
    getQuestions(tolkien);
  }

  clickToNext() {
    this.setState((state) => ({ index: state.index + 1 }));
  }

  shuffleAnswers() {
    const { questions } = this.props;
    const { index } = this.state;
    const orderedAnswers = [...questions[index].incorrect_answers, [questions[index].correct_answer, 'correct']];
    return orderedAnswers.sort(() => Math.random() - 0.5);
  }

  sumPoints() {
    const { sumPoints, time, difficulty } = this.props;
    const points = 10 + (time * difficulty);
    sumPoints(points);
  }

  render() {
    const { questions } = this.props;
    const { index } = this.state;

    if (questions.length > 0) {
      return (
        <div>
          <p data-testid="question-category">{`Categoria: ${questions[index].category}`}</p>
          <p data-testid="question-text">{questions[index].question}</p>
          {this.shuffleAnswers().map((e, i) => {
            if (e[1] === 'correct') {
              i -= 1;
              return <button type="button" onClick={() => this.sumPoints()} data-testid="correct-answer">{e[0]}</button>;
            }
            return <button type="button" data-testid={`wrong-answer${i}`}>{e}</button>;
          })}
          {(index < 4) && <button type="button" onClick={() => this.clickToNext()}>Próxima</button>}
          {(index === 4) && <button type="button">Finalizar</button>}
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
});

const mapStateToProps = (state) => ({
  tolkien: state.apiReducer.token,
  questions: state.apiReducer.questions,
  difficulty: state.difficultyReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

Quiz.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  tolkien: PropTypes.string.isRequired,
};

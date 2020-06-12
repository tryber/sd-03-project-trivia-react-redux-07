import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { generateQuestions } from '../actions/index';

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
    this.loadQuestions();
  }

  rightChoice() {
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
            <button type="button" data-testid="correct-answer" className="Correct">
              {e[0]}
            </button>
          );
        }
        count += 1;
        return (
          <button type="button" data-testid={`wrong-answer${count}`} className="Wrong">
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
          <button
            type="button"
            onClick={<Link to="/Feedback" />}
            data-testid="btn-next"
          >
            Próxima
          </button>
        )}
      </div>
    );
  }

  loadQuestions() {
    const { tolkien, getQuestions } = this.props;
    getQuestions(tolkien);
  }

  clickToNext() {
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
        </div>
      );
    }
    return (
      <p>Loading...</p>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (e) => dispatch(generateQuestions(e)),
});

const mapStateToProps = (state) => ({
  tolkien: state.apiReducer.token,
  questions: state.apiReducer.questions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

Quiz.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  tolkien: PropTypes.string.isRequired,
};

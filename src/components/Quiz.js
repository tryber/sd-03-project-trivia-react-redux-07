import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const randomIndex = (limit) => Math.round(Math.random() * limit)

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasToUpdate: false,
      counter: 0,
      ended: false,
    };
    this.callApi = this.callApi.bind(this);
    this.creatOptions = this.creatOptions.bind(this);

  }

  callApi() {t
    const { apiQuestions } = this.props;
    apiQuestions();
    this.setState({ hasToUpdate: true });
  }

  componentDidMount() {
    callApi();
  }

  componentDidUpdate() {
    const { hasToUpdate } = this.state;
    if (hasToUpdate) {
      this.createQuizz();
    }
  }

  creatOptions(elem) {
    const quizButtons = elem.incorrect_answers.map((answer, index) => (
      <button data-testid={`wrong-answer-${index}`} type="button" key={answer}>
        {answer}
      </button>
    ));
    quizButtons.splice(
      randomIndex(elem.incorrect_answers.length), 0,
      <button data-testid="correct-answer" type="button" key={elem.correct_answer}>
        {elem.correct_answer}
      </button>,
    );
    this.setState({
      counter: counter + 1,
      hasToUpdate: false,
    })
    return quizButtons;
  }

  createQuizz() {
    const { questions } = this.props;
    const { counter } = this.state;
    render() {
      return(
        <div>
          <div>
            <h3 data-testid="question-category">{questions[counter].category}</h3>
            <p data-testid="question-text">{questions[counter].question}</p>
          </div>
          <div>
            {this.creatOptions(questions[counter])}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  questions: store.
});

export default Quiz;

Quiz.propTypes = {
  apiQuestions: PropTypes.func,
};

Quiz.defaultProps = {
  apiQuestions: () => {},
};

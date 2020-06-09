import React from "react";
import { connect } from "react-redux";
import { generateQuestions } from "../actions/index";

class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.loadQuestions = this.loadQuestions.bind(this);
  }

  loadQuestions() {
    const {tolkien} = this.props;
    this.props.getQuestions(tolkien);
  }

  componentDidMount() {
    this.loadQuestions()
  }

  render() {
    return (
      <div>
        <button>Teste!</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (e) => dispatch(generateQuestions(e)),
});

const mapStateToProps = (state) => ({
  tolkien: state.apiReducer.token,
})

export default connect(mapStateToProps, mapDispatchToProps)(TestButton);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from './Header';
import FeedbackAnswears from './FeedbackAnswears';

class Feedback extends React.Component {
  render() {
    const { totalAns, scorePoints } = this.props;
    return (
      <div>
        <Header />
        <FeedbackAnswears totalAnswears={this.props.totalAns} />
        <p data-testid="feedback-total-question">{`Você acertou ${totalAns} questões!`}</p>
        <p data-testid="feedback-total-score">{`Fez um total de ${scorePoints} pontos`}</p>
        <Link to={"/gamepage"}><button data-testid="btn-play-again">Jogar novamente</button></Link>
        <Link to={"/ranking"}><button data-testid="btn-ranking">Ver Ranking</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  totalAns: state.scoreReducer.answers,
  scorePoints: state.scoreReducer.points,
})

export default connect(mapStateToProps)(Feedback);

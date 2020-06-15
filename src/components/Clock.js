import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tik, freezeClock } from '../actions/index';

class Clock extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  freezeTheClock() {
    const { pausecounter } = this.props;
    pausecounter();
    clearInterval(this.timerID);
  }

  tick() {
    const { tok } = this.props;
    tok();
  }

  render() {
    const { time } = this.props;
    if (time === 0) this.freezeTheClock();
    return (
      <div>
        <p>{`Tempo: ${time}`}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
  tok: () => dispatch(tik()),
  pausecounter: () => dispatch(freezeClock()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);

Clock.propTypes = {
  time: PropTypes.number.isRequired,
  tok: PropTypes.func.isRequired,
  pausecounter: PropTypes.func.isRequired,
};

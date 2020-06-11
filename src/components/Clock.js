import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { tik } from '../actions/index';

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

  tick() {
    this.props.tok();
  }

  render() {
    const { time } = this.props;
    if (time === 0) clearInterval(this.timerID);
    return (
      <div>
        <p>Tempo: { time }</p>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  time: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
  tok: () => dispatch(tik()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);

Clock.propTypes = {
  time: PropTypes.number.isRequired,
  tok: PropTypes.func.isRequired,
};

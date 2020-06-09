import React from 'react';
import { connect } from 'react-redux';
import { generateToken } from '../actions/index';

class TemporaryButton extends React.Component {
  constructor(props) {
    super(props);
    this.requestAPIToken = this.requestAPIToken.bind(this);
  }

  requestAPIToken() {
    const { storeToken } = this.props;
    storeToken();
  }

  componentDidUpdate() {
    console.log('entrouNoDidUpdate');
    const { tolkien } = this.props;
    localStorage.setItem('token', tolkien);
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.requestAPIToken}>
          Jogar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeToken: () => dispatch(generateToken()),
});

const mapStateToProps = (state) => ({
  tolkien: state.apiReducer.token,
});

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryButton);

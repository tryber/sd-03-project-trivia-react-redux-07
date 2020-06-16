import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { changeCategory, changeDifficulty, changeType } from '../actions/index';

const arrCategory = [
  { tag: 'General knowledge', id: 9 },
  { tag: 'Entertainment: Books', id: 10 },
  { tag: 'Entertainment: Filme', id: 11 },
  { tag: 'Entertainment: Music', id: 12 },
  { tag: 'Entertainment: Musicals & Theatres', id: 13 },
  { tag: 'Entertainment: Television', id: 14 },
  { tag: 'Entertainment: Video Games', id: 15 },
  { tag: 'Entertainment: Board Games', id: 16 },
  { tag: 'Science & Nature', id: 17 },
  { tag: 'Science: Computers', id: 18 },
  { tag: 'Science: Mathematics', id: 19 },
  { tag: 'Mythology', id: 20 },
  { tag: 'Sports', id: 21 },
  { tag: 'Geography', id: 22 },
  { tag: 'History', id: 23 },
  { tag: 'Politics', id: 24 },
  { tag: 'Art', id: 25 },
  { tag: 'Celebrities', id: 26 },
  { tag: 'Animals', id: 27 },
  { tag: 'Vehicles', id: 28 },
  { tag: 'Entertainment: Comics', id: 29 },
  { tag: 'Science: Gadgets', id: 30 },
  { tag: 'Entertainment: Japanese Anime & Manga', id: 31 },
  { tag: 'Entertainment: Cartoon & Animations', id: 32 },

];
const arrDifficulty = ['easy', 'medium', 'hard'];
const arrType = [
  { tag: 'Multiple Choice', id: 'multiple' },
  { tag: 'True / False', id: 'boolean' },
];

class ConfigurationScreen extends React.Component {
  handleCategory(elem) {
    const { setCategory } = this.props;
    setCategory(elem);
  }

  handleDifficulty(elem) {
    const { setDifficulty } = this.props;
    setDifficulty(elem);
  }

  handleType(elem) {
    const { setType } = this.props;
    setType(elem);
  }

  render() {
    return (
      <div>
        <title data-testid="settings-title">Configurações</title>
        <select onChange={(elem) => this.handleCategory(elem.target.value)}>
          <option value="" />
          {
            arrCategory.map((elem) => (
              <option key={elem.id} value={elem.id}>{elem.tag}</option>
            ))
          }
        </select>
        <select onChange={(elem) => this.handleDifficulty(elem.target.value)}>
          <option value="" />
          {arrDifficulty.map((elem) => (<option key={elem}>{elem}</option>))}
        </select>
        <select onChange={(elem) => this.handleType(elem.target.value)}>
          <option value="" />
          {
            arrType.map((elem) => (
              <option key={elem.id} value={elem.id}>{elem.tag}</option>
            ))
          }
        </select>
        <Link to="/">Voltar </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCategory: (cofCategory) => dispatch(changeCategory(cofCategory)),
  setDifficulty: (cofDifficulty) => dispatch(changeDifficulty(cofDifficulty)),
  setType: (cofType) => dispatch(changeType(cofType)),

});

export default connect(null, mapDispatchToProps)(ConfigurationScreen);

ConfigurationScreen.propTypes = {
  setCategory: PropTypes.func.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
};

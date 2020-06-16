import React from 'react';
import PropTypes from 'prop-types';

const FeedbackAnswears = (props) => {
  const { totalAnswears } = props;
  return (
    <div>
      {(totalAnswears < 3) ? <h1 className="display-4" data-testid="feedback-text">Podia ser melhor...</h1>
        : <h1 className="display-4" data-testid="feedback-text">Mandou bem!</h1>}
    </div>
  );
};

export default FeedbackAnswears;

FeedbackAnswears.propTypes = {
  totalAnswears: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import props from '../utils/propTypes';

const Situation = ({ situation }) => {
  if (situation == null) {
    return <div>Не найдено</div>;
  }

  return (
    <div>
      <p>Scramble</p>
      <code>{situation.scramble}</code>

      <p>Решения:</p>
      {situation.solutions.map((solution, i) => (
        <code key={i}>{solution}</code>
      ))}
    </div>
  );
};

Situation.propTypes = {
  situation: PropTypes.shape(props.situation),
  selectedPieces: PropTypes.shape(props.f2lPieces)
};

export default Situation;

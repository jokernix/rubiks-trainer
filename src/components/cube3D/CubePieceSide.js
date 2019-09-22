import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { generateTranslateSide } from '../../utils/utils';

const CubePieceSide = ({ sideKey, sideName, color, length }) => {
  return (
    <div
      className={classnames('piece__side', `piece__side--${sideName}`)}
      style={{ transform: generateTranslateSide(sideKey, length) }}
    >
      {color ? <div className={classnames('piece__sticker', `piece__sticker--${color}`)} /> : ''}
    </div>
  );
};

CubePieceSide.prototype = {
  sideKey: PropTypes.string.isRequired,
  sideName: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  color: PropTypes.string
};

export default CubePieceSide;

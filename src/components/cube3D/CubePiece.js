import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import props from '../../utils/propTypes';
import { generateTranslatePiece } from '../../utils/utils';
import CubePieceSide from './CubePieceSide';

const CubePiece = ({ piece, config, className, clickOnPiece }) => {
  const pieceLength = config.length / 3;
  const translatePiece = generateTranslatePiece(piece.key, pieceLength);

  return (
    <div
      className={classnames(className, 'piece')}
      id={`${piece.type}_${piece.key}`}
      style={{
        transform: `${translatePiece} matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)`
      }}
      onClick={() => clickOnPiece(piece.key)}
    >
      {Object.keys(config.sides).map(side => (
        <CubePieceSide
          key={`${piece.key}_${config.sides[side].name}`}
          sideKey={side}
          sideName={config.sides[side].name}
          length={pieceLength / 2}
          color={piece.key.includes(side) ? config.sides[side].color : null}
        />
      ))}
    </div>
  );
};

CubePiece.propTypes = {
  piece: PropTypes.shape(props.cubePiece).isRequired,
  config: PropTypes.shape(props.cubeSettings).isRequired,
  className: PropTypes.string,
  clickOnPiece: PropTypes.func
};

export default CubePiece;

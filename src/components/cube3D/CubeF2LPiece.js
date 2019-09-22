import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import props from '../../utils/propTypes';
import { generateTranslatePiece } from '../../utils/utils';
import CubePieceSide from './CubePieceSide';

const CubeF2LPiece = ({ piece, selectedPieces, config, className, clickOnPiece }) => {
  const pieceLength = config.length / 3;
  const translatePiece = generateTranslatePiece(piece.key, pieceLength);
  const clickablePieces = [...config.clickableEdges, ...config.clickableCorners];

  const colorScheme = { F: 'grey', B: 'grey', L: 'grey', R: 'grey', U: 'grey', D: 'grey' };

  if (selectedPieces && selectedPieces.corner && selectedPieces.corner.position === piece.key) {
    const { position, orientationFrontSide: frontSide } = selectedPieces.corner;
    let orientationIdx = position.indexOf(frontSide);

    let colors =
      position.indexOf('D') > -1
        ? [config.sides.D.color, config.sides.R.color, config.sides.F.color]
        : [config.sides.F.color, config.sides.R.color, config.sides.D.color];

    for (let i = 0; i < 3; i++) {
      colorScheme[position[orientationIdx++]] = colors[i];
      if (orientationIdx > 2) orientationIdx = 0;
    }
  }

  if (selectedPieces && selectedPieces.edge && selectedPieces.edge.position === piece.key) {
    const { position, orientationFrontSide: frontSide } = selectedPieces.edge;
    const rightSide = position.replace(frontSide, '');
    colorScheme[frontSide] = config.sides.F.color;
    colorScheme[rightSide] = config.sides.R.color;
  }

  return (
    <div
      className={classnames(className, 'piece', 'piece--inactive', {
        'piece--clickable': clickablePieces.indexOf(piece.key) > -1
      })}
      id={`${piece.type}_${piece.key}`}
      style={{ transform: `${translatePiece} matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)` }}
      onClick={() => clickOnPiece(piece.key)}
    >
      {Object.keys(config.sides).map(side => (
        <CubePieceSide
          key={`${piece.key}_${config.sides[side].name}`}
          sideKey={side}
          sideName={config.sides[side].name}
          length={pieceLength / 2}
          color={piece.key.includes(side) ? colorScheme[side] : null}
        />
      ))}
    </div>
  );
};

CubeF2LPiece.propTypes = {
  className: PropTypes.string,
  clickOnPiece: PropTypes.func,
  config: PropTypes.shape(props.cubeSettings).isRequired,
  piece: PropTypes.shape(props.cubePiece).isRequired,
  selectedPieces: PropTypes.shape(props.f2lPieces)
};

export default CubeF2LPiece;

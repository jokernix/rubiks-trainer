import PropTypes from 'prop-types';
import React from 'react';

import { cubeSettings, piecesArray } from '../../assets/cube-settings';
import '../../styles/cube3D.scss';
import props from '../../utils/propTypes';
import CubeF2LPiece from './CubeF2LPiece';
import CubePiece from './CubePiece';

const Cube3D = props => {
  const f2lPieces = ['BU', 'BLU', 'BRU', 'FRD', 'FR', 'FU', 'FLU', 'FRU', 'LU', 'RU'];

  const { f2lMode } = props;

  return (
    <div className="cube-container">
      <div
        className="cube"
        style={{ transform: 'rotate3d(1, 0, 0, -32deg) rotate3d(0, 1, 0, -45deg)' }}
      >
        {piecesArray.map(piece =>
          // prettier-ignore
          f2lMode && f2lPieces.indexOf(piece.key) > -1
            ? (<CubeF2LPiece {...props} className="cube__piece" key={piece.key} piece={piece} />)
            : (<CubePiece {...props} className="cube__piece" key={piece.key} piece={piece} />)
        )}
      </div>
    </div>
  );
};

Cube3D.propTypes = {
  config: PropTypes.shape(props.cubeSettings),
  f2lMode: PropTypes.bool,
  selectedPieces: PropTypes.shape(props.f2lPieces),
  clickOnPiece: PropTypes.func
};

Cube3D.defaultProps = {
  config: cubeSettings,
  clickOnPiece: () => {},
  f2lMode: false
};

export default Cube3D;

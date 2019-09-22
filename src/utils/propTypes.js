import PropTypes from 'prop-types';

const cubeSide = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

const cubeSides = {
  F: PropTypes.shape(cubeSide),
  B: PropTypes.shape(cubeSide),
  L: PropTypes.shape(cubeSide),
  R: PropTypes.shape(cubeSide),
  U: PropTypes.shape(cubeSide),
  D: PropTypes.shape(cubeSide)
};

const cubePiece = {
  id: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

const cubeSettings = {
  length: PropTypes.number.isRequired,
  sides: PropTypes.shape(cubeSides).isRequired,
  clickableCorners: PropTypes.arrayOf(PropTypes.string),
  clickableEdges: PropTypes.arrayOf(PropTypes.string)
};

const f2lPieces = {
  edge: PropTypes.shape({
    position: PropTypes.oneOf(['BU', 'FR', 'FU', 'LU', 'RU']).isRequired,
    orientationFrontSide: PropTypes.oneOf(['F', 'B', 'L', 'R', 'U', 'D']).isRequired
  }),
  corner: PropTypes.shape({
    position: PropTypes.oneOf(['FUR', 'FDR']).isRequired,
    orientationFrontSide: PropTypes.oneOf(['F', 'B', 'L', 'R', 'U', 'D']).isRequired
  })
};

export default {
  cubePiece,
  cubeSettings,
  f2lPieces
};

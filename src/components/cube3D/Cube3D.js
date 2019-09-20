import React from 'react';
import CubePiece from './CubePiece';
import { cubeSettings, piecesArray } from '../../assets/cube-settings';
import '../../styles/cube3D.css';

const Cube3D = ({ config }) => {
  if (!config) config = cubeSettings;

  return (
    <div className="cube-container">
      <div
        className="cube"
        style={{ transform: 'rotate3d(1, 0, 0, -32deg) rotate3d(0, 1, 0, -45deg)' }}
      >
        {piecesArray.map(piece => {
          switch (piece.type) {
            case 'corner':
            case 'edge':
            case 'center':
              return <CubePiece key={piece.key} piece={piece} config={config} />;
            case 'core':
              return <div key="core" />;
            default:
              return <div key={piece.key} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cube3D;

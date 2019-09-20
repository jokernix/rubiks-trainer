import React from 'react';
import { generateTranslatePiece, generateTranslateSide } from '../../utils/utils';

const CubePiece = ({ piece, config }) => {
  const pieceLength = config.length / 3;
  const translatePiece = generateTranslatePiece(piece.key, pieceLength);

  return (
    <div
      className="cube__piece"
      id={`${piece.type}_${piece.key}`}
      style={{
        transform: `${translatePiece} matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)`
      }}
    >
      {Object.keys(config.sides).map(key => (
        <div
          className={`piece__side piece__side--${config.sides[key].name}`}
          key={`${piece.type}_${piece.key}_${config.sides[key].name}`}
          style={{
            transform: generateTranslateSide(key, pieceLength / 2),
            backgroundColor: piece.key.includes(key) ? config.sides[key].color : null,
            boxShadow: 'black 0px 0px 0px 2px inset'
          }}
        />
      ))}
    </div>
  );
};

export default CubePiece;

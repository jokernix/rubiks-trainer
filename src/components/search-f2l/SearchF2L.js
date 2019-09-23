import React, { Component } from 'react';

import { cubeSettingsForF2l } from '../../assets/cube-settings';
import situations from '../../assets/f2l';
import Cube3D from '../cube3D/Cube3D';

class SearchF2L extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: cubeSettingsForF2l,
      selectedPieces: {
        edge: null,
        corner: null
      }
    };
  }

  clickOnPiece(key) {
    const { clickableCorners, clickableEdges } = this.state.config;

    if (clickableCorners.indexOf(key) > -1) {
      const corner = this.selectPiece(this.state.selectedPieces.corner, key);
      const { edge } = this.state.selectedPieces;
      this.setState(() => ({ selectedPieces: { edge, corner } }));
      this.findSituation(corner, edge);
    }

    if (clickableEdges.indexOf(key) > -1) {
      const { corner } = this.state.selectedPieces;
      const edge = this.selectPiece(this.state.selectedPieces.edge, key);
      this.setState(() => ({ selectedPieces: { edge, corner } }));
      this.findSituation(corner, edge);
    }
  }

  selectPiece(piece, key) {
    if (piece == null || piece.position !== key) {
      return { position: key, orientationFrontSide: key[0] };
    }

    const orientationIdx = piece.position.indexOf(piece.orientationFrontSide);
    if (orientationIdx === -1 || orientationIdx >= piece.position.length - 1) {
      return null;
    }

    return { ...piece, orientationFrontSide: key[orientationIdx + 1] };
  }

  findSituation(corner, edge) {
    if (corner == null || edge == null) return;

    const situation = situations.find(
      s =>
        s.setup.corner.orientationFrontFace === corner.orientationFrontSide &&
        s.setup.edge.orientationFrontFace === edge.orientationFrontSide &&
        s.setup.corner.position === corner.position &&
        s.setup.edge.position === edge.position
    );

    console.log(situation);
  }

  render() {
    return (
      <div>
        <Cube3D {...this.state} f2lMode={true} clickOnPiece={this.clickOnPiece.bind(this)} />
      </div>
    );
  }
}

export default SearchF2L;

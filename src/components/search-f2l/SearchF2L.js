import React, { Component } from 'react';

import { cubeSettingsForF2l } from '../../assets/cube-settings';
import situations from '../../assets/f2l';
import '../../styles/search-f2l.scss';
import Cube3D from '../cube3D/Cube3D';
import Situation from '../Situation';

class SearchF2L extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: cubeSettingsForF2l,
      selectedPieces: {
        edge: null,
        corner: null
      },
      foundSituation: null
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
      return { position: key, orientationFrontFace: key[0] };
    }

    const orientationIdx = piece.position.indexOf(piece.orientationFrontFace);
    if (orientationIdx === -1 || orientationIdx >= piece.position.length - 1) {
      return null;
    }

    return { ...piece, orientationFrontFace: key[orientationIdx + 1] };
  }

  findSituation(corner, edge) {
    if (corner == null || edge == null) {
      this.setState(() => ({ foundSituation: null }));
      return;
    }

    const situation = situations.find(
      s =>
        s.configuration.corner.orientationFrontFace === corner.orientationFrontFace &&
        s.configuration.edge.orientationFrontFace === edge.orientationFrontFace &&
        s.configuration.corner.position === corner.position &&
        s.configuration.edge.position === edge.position
    );

    console.log(situation);

    this.setState(() => ({ foundSituation: situation }));
  }

  render() {
    return (
      <div className="search-f2l-container">
        <Cube3D {...this.state} f2lMode={true} clickOnPiece={this.clickOnPiece.bind(this)} />
        <Situation {...this.state} />
      </div>
    );
  }
}

export default SearchF2L;

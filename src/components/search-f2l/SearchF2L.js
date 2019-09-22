import React, { Component } from 'react';
import { cubeSettingsForF2l } from '../../assets/cube-settings';
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
      this.clickOnCorner(key);
    }

    if (clickableEdges.indexOf(key) > -1) {
      this.clickOnEdge(key);
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

  clickOnCorner(key) {
    const corner = this.selectPiece(this.state.selectedPieces.corner, key);
    this.setState(state => ({ selectedPieces: { ...state.selectedPieces, corner } }));
  }

  clickOnEdge(key) {
    const edge = this.selectPiece(this.state.selectedPieces.edge, key);
    this.setState(state => ({ selectedPieces: { ...state.selectedPieces, edge } }));
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

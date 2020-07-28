import React from 'react';
import './F2l.css';
import Cube3D from '../Cube3D';
import situations from '../../assets/f2l';

function F2l() {
  const items = (situations || []).map((situation) => (
    <div className="grid__item" key={situation.id}>
      <Cube3D config={situation.config} />
      <p>{situation.solutions[0]}</p>
    </div>
  ));

  return <div className="grid">{items}</div>;
}

export default F2l;

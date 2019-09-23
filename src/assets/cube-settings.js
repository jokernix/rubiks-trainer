export const cubeSettings = {
  length: 150,
  sides: {
    F: { name: 'front', color: 'green' },
    B: { name: 'back', color: 'blue' },
    L: { name: 'left', color: 'orange' },
    R: { name: 'right', color: 'red' },
    U: { name: 'up', color: 'white' },
    D: { name: 'down', color: 'yellow' }
  }
};

export const cubeSettingsForF2l = {
  ...cubeSettings,
  clickableCorners: ['FRU', 'FRD'],
  clickableEdges: ['BU', 'FR', 'FU', 'LU', 'RU'],
  sides: {
    F: { name: 'front', color: 'blue' },
    B: { name: 'back', color: 'green' },
    L: { name: 'left', color: 'orange' },
    R: { name: 'right', color: 'red' },
    U: { name: 'up', color: 'yellow' },
    D: { name: 'down', color: 'white' }
  }
};

// key is F/B/- U/D/- L/R/-
// type is corner/edge/center/core
export const piecesArray = [
  // { id: 0, key: '', type: 'core' },

  { id: 1, key: 'F', type: 'center' },
  { id: 2, key: 'B', type: 'center' },
  { id: 3, key: 'L', type: 'center' },
  { id: 4, key: 'R', type: 'center' },
  { id: 5, key: 'U', type: 'center' },
  { id: 5, key: 'D', type: 'center' },

  { id: 6, key: 'FU', type: 'edge' },
  { id: 7, key: 'FR', type: 'edge' },
  { id: 8, key: 'FD', type: 'edge' },
  { id: 9, key: 'FL', type: 'edge' },
  { id: 10, key: 'LU', type: 'edge' },
  { id: 11, key: 'LD', type: 'edge' },
  { id: 12, key: 'RU', type: 'edge' },
  { id: 13, key: 'RD', type: 'edge' },
  { id: 14, key: 'BU', type: 'edge' },
  { id: 15, key: 'BR', type: 'edge' },
  { id: 16, key: 'BD', type: 'edge' },
  { id: 17, key: 'BL', type: 'edge' },

  { id: 18, key: 'FLU', type: 'corner' },
  { id: 19, key: 'FRU', type: 'corner' },
  { id: 20, key: 'FLD', type: 'corner' },
  { id: 21, key: 'FRD', type: 'corner' },
  { id: 22, key: 'BLU', type: 'corner' },
  { id: 23, key: 'BRU', type: 'corner' },
  { id: 24, key: 'BLD', type: 'corner' },
  { id: 25, key: 'BRD', type: 'corner' }
];

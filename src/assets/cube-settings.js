export const cubeSettings = {
  length: 150,
  sides: {
    F: {
      name: 'front',
      color: 'green'
    },
    B: {
      name: 'back',
      color: 'blue'
    },
    L: {
      name: 'left',
      color: 'orange'
    },
    R: {
      name: 'right',
      color: 'red'
    },
    U: {
      name: 'up',
      color: 'white'
    },
    D: {
      name: 'down',
      color: 'yellow'
    }
  }
};

// key is F/B/- L/R/- U/D/-
// type is corner/edge/center/core
export const piecesArray = [
  { id: 0, key: '', type: 'core' },

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

  { id: 18, key: 'FUL', type: 'corner' },
  { id: 19, key: 'FUR', type: 'corner' },
  { id: 20, key: 'FDL', type: 'corner' },
  { id: 21, key: 'FDR', type: 'corner' },
  { id: 22, key: 'BUL', type: 'corner' },
  { id: 23, key: 'BUR', type: 'corner' },
  { id: 24, key: 'BDL', type: 'corner' },
  { id: 25, key: 'BDR', type: 'corner' }
];

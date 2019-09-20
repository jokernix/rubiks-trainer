export const random = (from, to) => Math.round(Math.random() * to) + from;

export function generateTranslatePiece(key, length) {
  let x = 0;
  let y = 0;
  let z = 0;

  key.split('').forEach(letter => {
    switch (letter) {
      case 'F':
        z = length;
        break;
      case 'B':
        z = -length;
        break;
      case 'L':
        x = -length;
        break;
      case 'R':
        x = length;
        break;
      case 'U':
        y = -length;
        break;
      case 'D':
        y = length;
        break;
      default:
        break;
    }
  });

  return `translate3d(${x || 0}px, ${y || 0}px, ${z || 0}px)`;
}

export function generateTranslateSide(key, length) {
  let x = 0;
  let y = 0;
  let z = 0;
  let direction = 1;

  switch (key) {
    case 'F':
      z = 1;
      direction = 1;
      break;
    case 'B':
      z = 1;
      direction = -1;
      break;
    case 'L':
      y = 1;
      direction = -1;
      break;
    case 'R':
      y = 1;
      direction = 1;
      break;
    case 'U':
      x = 1;
      direction = 1;
      break;
    case 'D':
      x = 1;
      direction = -1;
      break;
    default:
      break;
  }

  return `rotate3d(${x}, ${y}, ${z}, 90deg) translate3d(0, 0, ${direction * length}px)`;
}

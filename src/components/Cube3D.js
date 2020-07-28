import React from 'react';

function Cube3D({ config, clickOnPiece }) {
  const { front, right, top } = config;
  const clickable = clickOnPiece != null;

  function handleClick(id) {
    switch (id) {
      case 't1':
      case 'f1':
        clickOnPiece('FLU');
        break;

      case 'f2':
      case 't4':
        clickOnPiece('FU');
        break;

      case 't7':
      case 'f3':
      case 'r1':
        clickOnPiece('FRU');
        break;

      case 't2':
        clickOnPiece('LU');
        break;

      case 't8':
      case 'r2':
        clickOnPiece('RU');
        break;

      case 't3':
        clickOnPiece('BLU');
        break;

      case 't6':
        clickOnPiece('BU');
        break;

      case 't9':
      case 'r3':
        clickOnPiece('BRU');
        break;

      case 'f6':
      case 'r4':
        clickOnPiece('FR');
        break;

      case 'f9':
      case 'r7':
        clickOnPiece('FRD');
        break;

      default:
        break;
    }
  }

  function getColor(color) {
    switch (color) {
      case 'W':
        return '#dedede'; // white
      case 'Y':
        return '#fff144'; // yellow
      case 'G':
        return '#07a42e'; // green
      case 'B':
        return '#180c8a'; // blue
      case 'O':
        return '#ffa40d'; // orange
      case 'R':
        return '#ea0600'; // red
      default:
        return '#565656';
    }
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297">
      <path
        id="base"
        d="M276.05,213V81.67a15,15,0,0,0-7.49-13L154.82,3a14.94,14.94,0,0,0-15,0L26.11,68.7a15,15,0,0,0-7.49,13V213a15,15,0,0,0,7.49,13l113.74,65.67a15,15,0,0,0,15,0L268.56,226A15,15,0,0,0,276.05,213Z"
      />

      <g id="front">
        <path
          id="f1"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('f1')}
          style={{ fill: getColor(front[0]) }}
          d="M59.82,106v29.69c0,3.66-2.26,5.37-5,3.78L27.58,123.71c-2.75-1.59-5-5.9-5-9.56V84.46c0-3.67,2.25-5.37,5-3.78L54.81,96.4C57.56,98,59.82,102.29,59.82,106Z"
        />
        <path
          id="f2"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('f2')}
          style={{ fill: getColor(front[1]) }}
          d="M102.25,130.46v29.69c0,3.66-2.25,5.37-5,3.78L70,148.21c-2.76-1.59-5-5.9-5-9.56V109c0-3.67,2.25-5.37,5-3.78L97.25,120.9C100,122.49,102.25,126.79,102.25,130.46Z"
        />
        <path
          id="f3"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('f3')}
          style={{ fill: getColor(front[2]) }}
          d="M144.69,155v29.69c0,3.66-2.25,5.37-5,3.78l-27.23-15.72c-2.75-1.59-5-5.9-5-9.56V133.46c0-3.67,2.25-5.37,5-3.78l27.23,15.72C142.44,147,144.69,151.29,144.69,155Z"
        />
        <path
          id="f4"
          style={{ fill: getColor(front[3]) }}
          d="M59.82,155v29.69c0,3.67-2.26,5.37-5,3.78L27.58,172.74c-2.75-1.59-5-5.89-5-9.56V133.49c0-3.67,2.25-5.37,5-3.78l27.23,15.72C57.56,147,59.82,151.32,59.82,155Z"
        />
        <path
          id="f5"
          style={{ fill: getColor(front[4]) }}
          d="M102.25,179.49v29.69c0,3.67-2.25,5.37-5,3.78L70,197.24c-2.76-1.59-5-5.89-5-9.56V158c0-3.67,2.25-5.37,5-3.78l27.23,15.72C100,171.52,102.25,175.82,102.25,179.49Z"
        />
        <path
          id="f6"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('f6')}
          style={{ fill: getColor(front[5]) }}
          d="M144.69,204v29.69c0,3.67-2.25,5.37-5,3.78l-27.23-15.72c-2.75-1.59-5-5.89-5-9.56V182.49c0-3.67,2.25-5.37,5-3.78l27.23,15.72C142.44,196,144.69,200.32,144.69,204Z"
        />
        <path
          id="f7"
          style={{ fill: getColor(front[6]) }}
          d="M59.82,204v29.68c0,3.67-2.26,5.37-5,3.78L27.58,221.77c-2.75-1.59-5-5.89-5-9.56V182.53c0-3.67,2.25-5.38,5-3.79l27.23,15.72C57.56,196.05,59.82,200.36,59.82,204Z"
        />
        <path
          id="f8"
          style={{ fill: getColor(front[7]) }}
          d="M102.25,228.53v29.68c0,3.67-2.25,5.37-5,3.78L70,246.27c-2.76-1.59-5-5.89-5-9.56V207c0-3.67,2.25-5.38,5-3.79L97.25,219C100,220.55,102.25,224.86,102.25,228.53Z"
        />
        <path
          id="f9"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('f9')}
          style={{ fill: getColor(front[8]) }}
          d="M144.69,253v29.68c0,3.67-2.25,5.37-5,3.78l-27.23-15.72c-2.75-1.59-5-5.89-5-9.56V231.53c0-3.67,2.25-5.38,5-3.79l27.23,15.72C142.44,245.05,144.69,249.36,144.69,253Z"
        />
      </g>

      <g id="top">
        <path
          id="t1"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('t1')}
          style={{ fill: getColor(top[0]) }}
          d="M67.45,92.44,94.68,76.72c2.76-1.59,2.41-4.39-.77-6.23L68.2,55.65c-3.18-1.84-8-2-10.78-.45L30.19,70.92c-2.75,1.59-2.41,4.39.77,6.23L56.67,92C59.85,93.83,64.7,94,67.45,92.44Z"
        />
        <path
          id="t2"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('t2')}
          style={{ fill: getColor(top[1]) }}
          d="M109.89,67.94l27.23-15.72c2.75-1.59,2.4-4.39-.78-6.23l-25.7-14.84c-3.18-1.84-8-2-10.79-.45L72.62,46.42c-2.75,1.59-2.4,4.39.78,6.23L99.11,67.49C102.28,69.33,107.13,69.53,109.89,67.94Z"
        />
        <path
          id="t3"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('t3')}
          style={{ fill: getColor(top[2]) }}
          d="M152.32,43.44l27.23-15.72c2.76-1.59,2.41-4.39-.77-6.23L153.07,6.65c-3.18-1.84-8-2-10.78-.45L115.06,21.92c-2.75,1.59-2.41,4.39.77,6.23L141.54,43C144.72,44.83,149.57,45,152.32,43.44Z"
        />
        <path
          id="t4"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('t4')}
          style={{ fill: getColor(top[3]) }}
          d="M109.92,117l27.23-15.72c2.75-1.59,2.4-4.39-.78-6.22L110.66,80.17c-3.17-1.84-8-2-10.78-.45L72.65,95.44c-2.75,1.59-2.4,4.39.78,6.23l25.7,14.84C102.31,118.34,107.16,118.54,109.92,117Z"
        />
        <path
          id="t5"
          style={{ fill: getColor(top[4]) }}
          d="M152.35,92.45l27.23-15.72c2.75-1.59,2.41-4.39-.77-6.22L153.1,55.67c-3.18-1.84-8-2-10.78-.45L115.09,70.94c-2.76,1.59-2.41,4.39.77,6.23L141.57,92C144.75,93.84,149.6,94,152.35,92.45Z"
        />
        <path
          id="t6"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('t6')}
          style={{ fill: getColor(top[5]) }}
          d="M194.79,68,222,52.23c2.75-1.59,2.4-4.39-.78-6.22l-25.7-14.84c-3.18-1.84-8-2-10.79-.45L157.52,46.44c-2.75,1.59-2.4,4.39.78,6.23L184,67.51C187.18,69.34,192,69.54,194.79,68Z"
        />
        <path
          id="t7"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('t7')}
          style={{ fill: getColor(top[6]) }}
          d="M152.38,141.47l27.23-15.72c2.75-1.59,2.4-4.39-.77-6.23l-25.71-14.84c-3.18-1.83-8-2-10.78-.45L115.11,120c-2.75,1.59-2.4,4.39.78,6.22L141.6,141C144.77,142.86,149.63,143.06,152.38,141.47Z"
        />
        <path
          id="t8"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('t8')}
          style={{ fill: getColor(top[7]) }}
          d="M194.81,117l27.24-15.72c2.75-1.59,2.4-4.39-.78-6.23L195.56,80.18c-3.17-1.83-8-2-10.78-.45L157.55,95.46c-2.75,1.59-2.4,4.39.77,6.22L184,116.52C187.21,118.36,192.06,118.56,194.81,117Z"
        />
        <path
          id="t9"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('t9')}
          style={{ fill: getColor(top[8]) }}
          d="M237.25,92.47l27.23-15.72c2.75-1.59,2.4-4.39-.77-6.23L238,55.68c-3.18-1.83-8-2-10.78-.45L200,71c-2.76,1.59-2.41,4.39.77,6.22L226.47,92C229.65,93.86,234.5,94.06,237.25,92.47Z"
        />
      </g>

      <g id="right">
        <path
          id="r1"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('r1')}
          style={{ fill: getColor(right[0]) }}
          d="M150,156v29.69c0,3.66,2.25,5.37,5,3.78l27.23-15.72c2.76-1.59,5-5.9,5-9.56V134.46c0-3.67-2.25-5.37-5-3.78L155,146.4C152.23,148,150,152.29,150,156Z"
        />
        <path
          id="r2"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('r2')}
          style={{ fill: getColor(right[1]) }}
          d="M192.41,131.46v29.69c0,3.66,2.26,5.37,5,3.78l27.23-15.72c2.75-1.59,5-5.9,5-9.56V110c0-3.67-2.25-5.37-5-3.78L197.42,121.9C194.67,123.49,192.41,127.79,192.41,131.46Z"
        />
        <path
          id="r3"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('r3')}
          style={{ fill: getColor(right[2]) }}
          d="M234.85,107v29.69c0,3.66,2.25,5.37,5,3.78l27.24-15.72c2.75-1.59,5-5.9,5-9.56V85.46c0-3.67-2.25-5.37-5-3.78L239.85,97.4C237.1,99,234.85,103.29,234.85,107Z"
        />
        <path
          id="r4"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('r4')}
          style={{ fill: getColor(right[3]) }}
          d="M150,205v29.69c0,3.67,2.25,5.37,5,3.78l27.23-15.72c2.76-1.59,5-5.89,5-9.56V183.49c0-3.67-2.25-5.37-5-3.78L155,195.43C152.23,197,150,201.32,150,205Z"
        />
        <path
          id="r5"
          style={{ fill: getColor(right[4]) }}
          d="M192.41,180.49v29.69c0,3.67,2.26,5.37,5,3.78l27.23-15.72c2.75-1.59,5-5.89,5-9.56V159c0-3.67-2.25-5.37-5-3.78l-27.23,15.72C194.67,172.52,192.41,176.82,192.41,180.49Z"
        />
        <path
          id="r6"
          style={{ fill: getColor(right[5]) }}
          d="M234.85,156v29.69c0,3.67,2.25,5.37,5,3.78l27.24-15.72c2.75-1.59,5-5.89,5-9.56V134.49c0-3.67-2.25-5.37-5-3.78l-27.24,15.72C237.1,148,234.85,152.32,234.85,156Z"
        />
        <path
          id="r7"
          className={clickable ? 'cursor' : null}
          onClick={() => handleClick('r7')}
          style={{ fill: getColor(right[6]) }}
          d="M150,254v29.68c0,3.67,2.25,5.37,5,3.78l27.23-15.72c2.76-1.59,5-5.89,5-9.56V232.53c0-3.67-2.25-5.38-5-3.79L155,244.46C152.23,246.05,150,250.36,150,254Z"
        />
        <path
          id="r8"
          style={{ fill: getColor(right[7]) }}
          d="M192.41,229.53v29.68c0,3.67,2.26,5.37,5,3.78l27.23-15.72c2.75-1.59,5-5.89,5-9.56V208c0-3.67-2.25-5.38-5-3.79L197.42,220C194.67,221.55,192.41,225.86,192.41,229.53Z"
        />
        <path
          id="r9"
          style={{ fill: getColor(right[8]) }}
          d="M234.85,205v29.68c0,3.67,2.25,5.37,5,3.78l27.24-15.72c2.75-1.59,5-5.89,5-9.56V183.53c0-3.67-2.25-5.38-5-3.79l-27.24,15.72C237.1,197.05,234.85,201.36,234.85,205Z"
        />
      </g>
    </svg>
  );
}

Cube3D.propTypes = {};

export default Cube3D;

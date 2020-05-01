import getRandomColor from '../genRandomColor';
import genSquareMatrix from '../genSquareMatrix';

function genColorMatrix(n: number): ColorElement[][] {
  return genSquareMatrix(n).map(
    (arr: null[], arrIndex: number): ColorElement[] => {
      const color: RgbCode = getRandomColor();
      return arr.map(
        (_, elementIndex: number): ColorElement => ({
          id: `${arrIndex}-${elementIndex}`,
          color,
          opacity: (elementIndex + 1) / n,
          position: { x: arrIndex, y: elementIndex },
        })
      );
    }
  );
}

export default genColorMatrix;

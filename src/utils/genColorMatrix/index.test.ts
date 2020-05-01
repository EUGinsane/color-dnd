import genColorMatrix from './index';

describe('genColorMatrix utility', () => {
  test.each([1, 2, 3])(
    'it returns a %sx%s matrix with each value is a ColorElement',
    (input) => {
      const matrix = genColorMatrix(input);
      expect(matrix.length).toEqual(input);
      matrix.forEach((element, elementIndex) => {
        expect(element.length).toEqual(input);
        element.forEach(({ id, color, opacity, position }, valueIndex) => {
          expect(typeof id).toEqual('string');
          expect(typeof color).toEqual('object');
          expect(typeof opacity).toEqual('number');
          expect(typeof position).toEqual('object');

          expect(id).toEqual(`${elementIndex}-${valueIndex}`);
          expect(position.x).toEqual(elementIndex);
          expect(position.y).toEqual(valueIndex);
          expect(opacity).toEqual((valueIndex + 1) / input);
        });
      });
    }
  );
});

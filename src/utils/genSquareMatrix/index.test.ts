import genSquareMatrix from './index';

describe('genSquareMatrix utility', () => {
  test.each([1, 2, 3])(
    'it returns a %sx%s matrix with each value is null',
    (input) => {
      const matrix = genSquareMatrix(input);
      expect(matrix.length).toEqual(input);
      matrix.forEach((element) => {
        expect(element.length).toEqual(input);
        element.forEach((value) => expect(value).toEqual(null));
      });
    }
  );
});

import genRandomColor from './index';

describe('genRandomColor utility', () => {
  test.each([genRandomColor(), genRandomColor(), genRandomColor()])(
    'it returns r, b, g numbers that less or equal than 255',
    ({ r, g, b }) => {
      expect(typeof r).toBe('number');
      expect(typeof b).toBe('number');
      expect(typeof g).toBe('number');
      expect(r).toBeLessThan(255);
      expect(b).toBeLessThan(255);
      expect(g).toBeLessThan(255);
    }
  );
});

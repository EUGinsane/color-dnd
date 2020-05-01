function genSquareMatrix(n: number): null[][] {
  return Array.from(
    {
      length: n,
    },
    () => new Array(n).fill(null)
  );
}

export default genSquareMatrix;

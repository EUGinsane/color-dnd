function randomNumber(): number {
  return Math.floor(Math.random() * 256);
}

function genRandomColor(): RgbCode {
  const r = randomNumber();
  const g = randomNumber();
  const b = randomNumber();
  return { r, g, b };
}

export default genRandomColor;

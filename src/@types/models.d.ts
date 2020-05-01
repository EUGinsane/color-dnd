interface Cordinate {
  x: number;
  y: number;
}

interface RgbCode {
  r: number;
  g: number;
  b: number;
}

interface ColorElement {
  id: string;
  color: RgbCode;
  opacity: number;
  position: Cordinate;
}

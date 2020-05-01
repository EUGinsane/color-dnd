interface ColorElementComponent {
  data: ColorElement;
  onDragEnd: (sourcePosition: Cordinate, targetPosition: Cordinate) => void;
}

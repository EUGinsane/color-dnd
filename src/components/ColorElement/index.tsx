import React from 'react';
import styled from 'styled-components';
import {
  useDrag,
  useDrop,
  DragSourceMonitor,
  DropTargetMonitor,
  ConnectableElement,
} from 'react-dnd';
import { ItemTypes } from '../../constants';

type Container = {
  isDragging: boolean;
  isOver: boolean;
  data: ColorElement;
};

const Container = styled.div<Container>`
  background-color: ${({
    data: {
      color: { r, g, b },
      opacity,
    },
    isOver,
  }) => (isOver ? 'black' : `rgba(${r}, ${g}, ${b}, ${opacity})`)};
  border: 1px black solid;
  cursor: pointer;
  flex: 1;
`;

const ColorElement: React.FC<ColorElementComponent> = (props) => {
  const { data, onDragEnd } = props;

  const [{ isDragging }, connectDragSource] = useDrag({
    item: {
      type: ItemTypes.COLOR_ELEMENT,
      position: data.position,
      opacity: data.opacity,
    },
    collect: (monitor: DragSourceMonitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  const [{ isOver }, connectDropTarget] = useDrop({
    accept: ItemTypes.COLOR_ELEMENT,
    drop: (item: { type: string; position: Cordinate }) => {
      onDragEnd(item.position, data.position);
    },
    collect: (monitor: DropTargetMonitor) => {
      return {
        isOver: monitor.isOver(),
      };
    },
  });

  const attachRef = (ref: ConnectableElement): void => {
    connectDragSource(ref);
    connectDropTarget(ref);
  };

  return (
    <Container
      ref={attachRef}
      isDragging={isDragging}
      isOver={isOver}
      data={data}
    />
  );
};

export default ColorElement;

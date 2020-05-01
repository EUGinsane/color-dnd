import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import htmlBackend from 'react-dnd-html5-backend';
import styled from 'styled-components';
import { ColorElement } from '../../components';
import { genColorMatrix } from '../../utils';

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DragDropContainer: React.FC<DragDropContainer> = ({ size }) => {
  const [colorMatrix, setColorMatrix] = useState(genColorMatrix(size));

  const onDragEnd = (
    sourcePosition: Cordinate,
    targetPosition: Cordinate
  ): void => {
    const newMatrix = colorMatrix.map((arr: ColorElement[]): ColorElement[] =>
      arr.slice()
    );
    newMatrix[sourcePosition.x][sourcePosition.y].position = targetPosition;
    newMatrix[targetPosition.x][targetPosition.y].position = sourcePosition;

    let temp: ColorElement = newMatrix[sourcePosition.x][sourcePosition.y];
    newMatrix[sourcePosition.x][sourcePosition.y] =
      newMatrix[targetPosition.x][targetPosition.y];
    newMatrix[targetPosition.x][targetPosition.y] = temp;

    setColorMatrix(newMatrix);
  };

  return (
    <DndProvider backend={htmlBackend}>
      {colorMatrix.map((arr: ColorElement[], index: number) => (
        <Column key={index}>
          {arr.map((element) => (
            <ColorElement
              key={element.id}
              data={element}
              onDragEnd={onDragEnd}
            />
          ))}
        </Column>
      ))}
    </DndProvider>
  );
};

export default DragDropContainer;

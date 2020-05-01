import React from 'react';
import styled from 'styled-components';
import DragDropContainer from '../../containers/DragDropContainer';

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const HomePage: React.FC = () => {
  return (
    <Page>
      <DragDropContainer size={8} />
    </Page>
  );
};

export default HomePage;

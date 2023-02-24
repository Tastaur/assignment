import React, { FC, PropsWithChildren } from 'react';
import { Stack, styled } from '@mui/material';


const Main = styled(Stack)`
  width: 100vw;
  height: 100vh;
  background-color: hotpink;
  * {
    box-sizing: border-box;
  }
`;


const Wrapper = styled(Stack)`
  width: 40vw;
  min-width: 300px;
  margin: 0 auto;
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    height: 1px;

  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const MainLayout: FC<PropsWithChildren> = ({ children }) =>{
  return (
    <Main as='main'>
      <Wrapper>
        {children}
      </Wrapper>
    </Main>
  );
};
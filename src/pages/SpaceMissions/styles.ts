import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  /* place-content: center; */

  width: 100%;
  height: 100%;
  /* max-width: 700px; */

  img {
    margin: 16px 0px;
    max-width: 100%;
  }
`;

const apperFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${apperFromRight} 1s;
`;

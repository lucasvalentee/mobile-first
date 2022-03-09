import React from 'react';

import { Container } from './styles';

interface TextContainerProps {
  text: string[];
}

const TextContainer: React.FC<TextContainerProps> = ({ text }) => (
  <>
    {text &&
      text.map((texto, index) => (
        <>
          <Container>&nbsp;&nbsp;&nbsp;&nbsp;{texto}</Container>
          {index !== text.length - 1 && <br />}
        </>
      ))}
  </>
);

export default TextContainer;

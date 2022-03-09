import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;

  a {
    background-color: #312e38;
    width: 25%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #f4ede8;
    text-decoration: none;
    transition: color 0ms.2s;
    text-align: center;

    padding: 20px 0px;

    box-shadow: 4px 4px 16px rgb(0 0 0 / 20%);

    &:hover {
      background-color: ${shade(0.2, '#312e38')};
    }
  }
`;

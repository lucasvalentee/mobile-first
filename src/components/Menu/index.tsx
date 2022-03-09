import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Menu: React.FC = () => (
  <Container>
    <Link to="/">Início</Link>
    <Link to="/works">Trabalhos feitos</Link>
    <Link to="/missions">Missões espaciais</Link>
    <Link to="/spaceships">Naves criadas</Link>
  </Container>
);

export default Menu;

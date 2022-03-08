import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle, { Container } from './styles/global';

import Menu from './components/Menu';

import AppRoutes from './routes';

const App: React.FC = () => (
  <Router>
    <Container>
      <Menu />
      <AppRoutes />
    </Container>

    <GlobalStyle />
  </Router>
);

export default App;

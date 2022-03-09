import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import WorksDone from '../pages/WorksDone';
import SpaceMissions from '../pages/SpaceMissions';
import Main from '../pages/Main';
import Spaceships from '../pages/Spaceships';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/works" component={WorksDone} />
    <Route path="/missions" component={SpaceMissions} />
    <Route path="/spaceships" component={Spaceships} />
  </Switch>
);

export default AppRoutes;

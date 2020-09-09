import React from 'react';
import { Route } from 'react-router-dom';
import { RootRoute } from './RootRoute';

function App() {
  return <Route path="/" component={RootRoute} />;
}

export default App;

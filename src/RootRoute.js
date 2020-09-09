import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from './Components/SignIn';
import Home from './Components/Home';
import AddCandidate from './Components/AddCandidate';
export const RootRoute = (props) => {
  const { match } = props;
  return (
    <>
      <Route exact path={`${match.url}`} component={SignIn} />
      <Route exact path={`${match.url}login`} component={SignIn} />
      {/* <Route exact path={`${match.url}forget`} component={Forget} /> */}
      <Route path={`${match.url}Home`} component={Home} />
      <Route path={`${match.url}candidate/add`} component={AddCandidate} />
      {/* <PrivateRoute path={`${match.url}staff`} component={Layout} /> */}
    </>
  );
};

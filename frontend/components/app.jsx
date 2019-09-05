import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route';

const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;

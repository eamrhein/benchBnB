import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route';
import SearchContainer from './bench/search_container';
import BenchFormContainer from './bench/bench_form/bench_form_container';

const App = () => (
  <div>
    <header>
      <nav className="nav">
        <h1 className="header">
          <span role="img" aria-label="seat">💺</span>
          BenchBnB
          <span role="img" aria-label="seat">💺</span>
        </h1>
        <GreetingContainer />
      </nav>
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;

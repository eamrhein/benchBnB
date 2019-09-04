import React from 'react';
import ReacDOM from 'react-dom';
import { signin, logout, signup } from './util/session';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.signin = signin;
  window.logout = logout;
  window.signup = signup;
  ReacDOM.render(<h1>Welcome to BenchBnb</h1>, root);
});

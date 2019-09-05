import React from 'react';
import ReacDOM from 'react-dom';
import { signin, logout, signup } from './util/session';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReacDOM.render(<h1>Welcome to BenchBnb</h1>, root);
});

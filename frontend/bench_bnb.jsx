import React from 'react';
import ReacDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchBenches } from './actions/bench';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  const root = document.getElementById('root');
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // window.login = signin;
  // window.logout = logout;
  window.fetchBenches = fetchBenches;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReacDOM.render(<Root store={store} />, root);
});

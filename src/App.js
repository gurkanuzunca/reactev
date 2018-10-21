import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store';

import Posts from './components/posts';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Posts />
      </Provider>
    );
  }
}

export default App;

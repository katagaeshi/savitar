import React from 'react';

// TODO: Mention psyduck icon author
// <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons-freebies"
// title="Roundicons Freebies">Roundicons Freebies</a> from <a href="https://www.flaticon.com/"
// title="Flaticon">www.flaticon.com</a> is licensed by
// <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

import logo from './psyduck.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Savitar</h1>
    </header>
    <p className="App-intro">
      Here we&#39;ll try to make something funny.
    </p>
  </div>
);

export default App;

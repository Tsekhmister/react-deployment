import React from 'react';
import ReactDOM from 'react-dom';

const API_URL = 'https://production.api';
// cosnt API_URL = 'https://development.api'

const App = () => (
  <div className='App'>
    <h1>Hello world</h1>
    <p>{API_URL}</p>
    {process.env.REACT_APP_TEST}
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom';
import Body from './components/Body';


ReactDOM.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);


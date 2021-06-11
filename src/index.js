import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

//import { AppCentral } from './AppCentral';
import { AppRouter } from './router/AppRouter';


ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
;



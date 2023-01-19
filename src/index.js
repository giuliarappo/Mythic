import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Table from './Table';
import './Table.css';
import MenuTendina from './MenuTendina';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuTendina/>
    <Table/>
  </React.StrictMode>
);



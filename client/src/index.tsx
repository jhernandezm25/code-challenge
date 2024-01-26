import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import ApiCaller from './components/apiCaller';
import NameForm from './components/nameForm';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ApiCaller />
      <NameForm />
    </React.StrictMode>
  );
}


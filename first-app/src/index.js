import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Welcome from './test/Welcome';
import WelcomeList from './test/WelcomeList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WelcomeList />
  </React.StrictMode>
);

// WelcomeList안에 Welcome파일이 임포트 되어있어서 최종파일인 WelcomeList파일만 불러오면 된다

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

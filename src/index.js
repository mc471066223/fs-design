import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import AppRouter from '@/routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import '@/styles/index.module.scss';

const App = () => (
  <ConfigProvider>
    <AppRouter />
  </ConfigProvider>
);

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
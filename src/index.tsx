import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.render(
  // 这里新标签是为了提示错误的. 好用  （严格模式会出现函数组件打印两遍的问题）
  // <React.StrictMode>
  <App/>,
  // </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();

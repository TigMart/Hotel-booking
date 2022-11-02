import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

// CSS And Bootstrap
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

//  redux and react redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

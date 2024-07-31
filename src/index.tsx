import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProviderComponent } from './Components/theme/themeContext';
import { Provider } from 'react-redux';
import store from './Components/store/store'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProviderComponent>
        <App />
      </ThemeProviderComponent>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

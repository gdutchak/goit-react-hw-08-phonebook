import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {persistor} from './redux/store';
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <BrowserRouter basename='goit-react-hw-08-phonebook'>
      <ChakraProvider>
      <App />
      </ChakraProvider>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
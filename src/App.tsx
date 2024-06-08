import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import ProductList from './components/ProductList';
import { fetchProducts } from './actions/productActions';

function App() {
  useEffect(() => {
    store.dispatch(fetchProducts());
  }, []);

  return (
    <Provider store={store}>
      <div>
        <header>
          <AppBar position='static'>
            <Toolbar style={{ backgroundColor: '#052849' }}>
              <img width={100} src={logo} className='' alt='logo' />
            </Toolbar>
          </AppBar>
        </header>
        <div>
          <ProductList />
        </div>
      </div>
    </Provider>
  );
}

export default App;

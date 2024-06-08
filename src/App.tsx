import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { fetchProducts } from './actions/productActions';
import { Routes, Route, HashRouter, Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    store.dispatch(fetchProducts());
  }, []);

  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <header>
            <AppBar position='static'>
              <Toolbar style={{ backgroundColor: '#052849' }}>
                <Link to="/">
                  <img width={100} src={logo} className='' alt='logo' />
                </Link>
              </Toolbar>
            </AppBar>
          </header>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product_dashboard" element={<ProductList />} />
            <Route path="/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;

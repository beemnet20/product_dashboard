import axios from 'axios';

// Action types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Thunk action creator for fetching products
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS });

    try {
      const url = window.location.hostname === "localhost"? "/data/data.json": "https://raw.githubusercontent.com/beemnet20/product_dashboard/gh-pages/data/data.json"
      const response = await axios.get(url);
      const products = response.data;

      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, error: error.message });
      console.error('Error fetching products:', error);
    }
  };
};

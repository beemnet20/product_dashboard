import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, loading, error } = useSelector((state) => state.products);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <h2>Products</h2>

      {products.length > 0 ? (
        products.map((product) => (
          <Card sx={{ maxWidth: 345 }} key={product.id}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.image}
              title={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {product.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {product.details.join().length > 100
                  ? `${product.details.join().substring(0, 100)}...`
                  : product.details}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant='contained'
                style={{ backgroundColor: '#052849' }}
                fullWidth
                size='small'
                href= {`/product/${product.id}`}
              >
                View details
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <p>No products available</p>
      )}
    </Container>
  );
};

export default ProductList;

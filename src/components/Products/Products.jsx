import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  { id: 1, name: 'Camisa Batman', descriptions: 'Camisa do Batman. ', price: 'R$5,00' , image: 'https://i.imgur.com/v3GKExg.png',},
  { id: 2, name: 'Caneca Flash', descriptions: ' Caneca do Flash.', price: 'R$10,00' , image: 'https://i.imgur.com/VFC7QBz.png',},
];

const Products = () => {
  return (
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))};
    </Grid>
  </main>
  )
};

export default Products;
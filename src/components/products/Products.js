import { data } from "../../db/data.js";
import "./Products.css";
import ProductCard from './productCard/ProductCard.js';
import Grid from "@mui/material/Grid";

export default function Products(props) {
  let products = data.map((el) => (
    <Grid item xs={4}>
      <ProductCard data={el} className='productCard'/>
    </Grid>
  ));

  return (
    <>
      <h1 className="productHeader">This is the Products Page</h1>
      <Grid container spacing={2}>
        {products}
      </Grid>
    </>
  );
}

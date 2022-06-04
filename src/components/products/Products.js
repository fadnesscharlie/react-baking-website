import { data } from "../../db/data.js";
import "./Products.css";
import ProductCard from "./productCard/ProductCard.js";

// ### Material UI
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useState } from "react";
import Baking from "../bakingStory/BakingStory.js";

export default function Products(props) {
  const [page, setPage] = useState(1);
  let perPage = 6;

  const lastProduct = page * perPage;
  const firstProduct = lastProduct - perPage;
  const currentProduct = data.slice(firstProduct, lastProduct);

  const pageNumbers = Math.ceil(data.length / perPage);

  let products = currentProduct.map((el, idx) => (
    <Grid item xs={4} key={idx}>
      <ProductCard data={el} className="productCard" />
    </Grid>
  ));

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="productImgBox landingBackgroundColor">
      <section className="bakingImagesDiv">
        <h1 className="productHeader">
          Products Page Under Construction, Please bear with us, but enjoy the
          baked goods!
        </h1>

        <Grid container spacing={2}>
          {products}
        </Grid>

        <Stack spacing={2}>
          <Pagination
            count={pageNumbers}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
            onChange={handleChange}
          />
        </Stack>
      </section>
      <section className="backgroundColorWhite">
        <section className="bakingDiv">
          <Baking />
        </section>
      </section>
    </div>
  );
}

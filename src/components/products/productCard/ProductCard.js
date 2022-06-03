import { useState } from "react";
import ProductModal from "../productModal/ProductModal";

export default function ProductCard(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="productCardBox" onClick={handleOpen}>
        <img
          src={props.data.image_url}
          alt={props.data.title}
          className="productCardImg"
        />
        <p>{props.data.title}</p>
      </section>

      <ProductModal 
        data={props.data} 
        open={open} 
        handleClose={handleClose} 
      />
    </>
  );
}

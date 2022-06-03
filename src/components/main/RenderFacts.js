import { useState } from 'react';
import ProductModal from '../products/productModal/ProductModal';


export default function RenderFacts(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return(
    <>
      <div className="facts" >
                {props.el.icon} {props.el.question}:{" "}
                {props.el.link ? (
                  <a
                    className="factsLinks imageLink"
                    href={props.el.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {props.el.title}
                  </a>
                ) : props.el.image_url ? (
                  <>
                    <section 
                      className="imageLink" 
                      onClick={handleOpen}
                    >
                      {props.el.title}
                    </section>
                    <ProductModal
                      data={props.el}
                      open={open}
                      handleClose={handleClose}
                    />
                  </>
                ) : (
                  props.el.title
                )}
              </div>
    </>
  )
}
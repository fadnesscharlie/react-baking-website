import { useState } from "react";
// import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
        {/* <Button size="small" color="primary">
          View More
        </Button> */}
      </section>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {props.data.title}
            </Typography>
            <img
              src={props.data.image_url}
              alt={props.data.title}
              className="productCardImgModal"
            />
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              TODO: Create a better description and title for each item
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

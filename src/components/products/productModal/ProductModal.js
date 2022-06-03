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

export default function ProductModal(props) {
  return(
    <>
     <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
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
              {props.data.description ? props.data.description :
              'TODO: Create a better description and title for each item'
              }
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

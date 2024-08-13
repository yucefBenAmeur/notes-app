import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Modal, Typography } from "@mui/material";
import Formm from "./Formm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 5,
};

export interface AddNoteProps {
  handleAddNote: (note: {
    title: string;
    text: string;
    category: string;
  }) => void;
}

const AddButton = ({ handleAddNote }: AddNoteProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        size="medium"
        className="m-2 position-absolute bottom-0 end-0"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Add Your Note
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Formm handleAddNote={handleAddNote} />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AddButton;

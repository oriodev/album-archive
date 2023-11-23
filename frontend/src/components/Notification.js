import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function Notification({ message = '' }) {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // you can have an 'action' like undo

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}

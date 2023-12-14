import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import { setMessage, setOn } from '../reducers/notifications';

export default function Notification() {
  const on = useSelector((state) => state.notifications.value.on);

  const message = useSelector((state) => state.notifications.value.message);

  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setOn(false));
    dispatch(setMessage(null));
  };

  // you can have an 'action' like undo

  return (
    <div>
      <Snackbar
        open={on}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}

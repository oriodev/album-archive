// redux
import { useSelector, useDispatch } from 'react-redux';
import { set } from './reducers/albums';

// react
import { useEffect, useState } from 'react';

// components
import NavBar from './components/NavBar';
import AlbumDisplay from './components/AlbumDisplay';
import Notification from './components/Notification';
import AddAlbumForm from './components/AddAlbumForm';

// utils
import { getAlbums } from './utils/httpRequests';
import { Box } from '@mui/material';
import { sortedAlbumsList } from './utils/displayUtils';

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  const albums = useSelector((state) => state.albums.value);
  const sortStyle = useSelector((state) => state.sorting.value);

  const dispatch = useDispatch();

  useEffect(() => {
    getAlbums()
      .then((albums) => {
        const sortedAlbum = sortedAlbumsList(sortStyle, albums);
        dispatch(set(sortedAlbum));
      })
      .catch((error) => {
        console.error('server is not running');
        dispatch(set([]));
      });
  }, [dispatch, sortStyle]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Notification />
      <NavBar setFormOpen={setFormOpen} formOpen={formOpen} />
      <AddAlbumForm setFormOpen={setFormOpen} formOpen={formOpen} />
      <AlbumDisplay albums={albums} />
    </Box>
  );
};

export default App;

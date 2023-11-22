// redux
import { useSelector, useDispatch } from 'react-redux';
import { set } from './reducers/albums';

// react
import { useEffect, useState } from 'react';

// components
import NavBar from './components/NavBar';
import AlbumDisplay from './components/AlbumDisplay';

// utils
import { getAlbums } from './utils/httpRequests';
import AddAlbumForm from './components/AddAlbumForm';
import { Box } from '@mui/material';

const App = () => {
  const [formOpen, setFormOpen] = useState(false);

  const albums = useSelector((state) => state.albums.value);

  const dispatch = useDispatch();

  useEffect(() => {
    getAlbums().then((albums) => {
      dispatch(set(albums));
    });
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <NavBar setFormOpen={setFormOpen} formOpen={formOpen} />
      <AddAlbumForm setFormOpen={setFormOpen} formOpen={formOpen} />
      <AlbumDisplay albums={albums} />
    </Box>
  );
};

export default App;

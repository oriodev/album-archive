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

// for next time:
// make title text white
// limit how many albums can show on a row at once

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
    <div>
      <NavBar setFormOpen={setFormOpen} formOpen={formOpen} />
      <AddAlbumForm setFormOpen={setFormOpen} formOpen={formOpen} />
      <AlbumDisplay albums={albums} />
    </div>
  );
};

export default App;

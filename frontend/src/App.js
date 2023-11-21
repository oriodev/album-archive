import { useSelector, useDispatch } from 'react-redux';

import { set } from './reducers/albums';
import { useEffect } from 'react';

const App = () => {
  const albums = useSelector((state) => state.albums.value);

  const dispatch = useDispatch();

  // set the album list

  useEffect(() => {
    dispatch(set([]));
  }, [dispatch]);

  console.log(albums);

  return <div>hi</div>;
};

export default App;

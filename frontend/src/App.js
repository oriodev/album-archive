// redux
import { useSelector, useDispatch } from 'react-redux';
import { set } from './reducers/albums';

// react
import { useEffect } from 'react';

// components
import NavBar from './components/NavBar';
import AlbumDisplay from './components/AlbumDisplay';

const App = () => {
  const albums = useSelector((state) => state.albums.value);

  const dispatch = useDispatch();

  // set the album list

  useEffect(() => {
    dispatch(
      set([
        {
          albumTitle: 'blue neighbourhood',
          albumArtist: 'troye sivan',
          albumCover:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2Fe2%2F1e%2F1de21ee6bfb84ec995aa09c6ff3762e4.png&f=1&nofb=1&ipt=9b475e4f0ba5b384be76bf3c003e93cc05d9bf8cff77b8e28e6d32a0839418cf&ipo=images',
          albumRating: 5,
          albumId: 1,
        },
        {
          albumTitle: 'blue neighbourhood',
          albumArtist: 'troye sivan',
          albumCover:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2Fe2%2F1e%2F1de21ee6bfb84ec995aa09c6ff3762e4.png&f=1&nofb=1&ipt=9b475e4f0ba5b384be76bf3c003e93cc05d9bf8cff77b8e28e6d32a0839418cf&ipo=images',
          albumRating: 5,
          albumId: 2,
        },
        {
          albumTitle: 'blue neighbourhood',
          albumArtist: 'troye sivan',
          albumCover:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2Fe2%2F1e%2F1de21ee6bfb84ec995aa09c6ff3762e4.png&f=1&nofb=1&ipt=9b475e4f0ba5b384be76bf3c003e93cc05d9bf8cff77b8e28e6d32a0839418cf&ipo=images',
          albumRating: 5,
          albumId: 3,
        },
        {
          albumTitle: 'blue neighbourhood',
          albumArtist: 'troye sivan',
          albumCover:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2Fe2%2F1e%2F1de21ee6bfb84ec995aa09c6ff3762e4.png&f=1&nofb=1&ipt=9b475e4f0ba5b384be76bf3c003e93cc05d9bf8cff77b8e28e6d32a0839418cf&ipo=images',
          albumRating: 5,
          albumId: 4,
        },
        {
          albumTitle: 'blue neighbourhood',
          albumArtist: 'troye sivan',
          albumCover:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2Fe2%2F1e%2F1de21ee6bfb84ec995aa09c6ff3762e4.png&f=1&nofb=1&ipt=9b475e4f0ba5b384be76bf3c003e93cc05d9bf8cff77b8e28e6d32a0839418cf&ipo=images',
          albumRating: 5,
          albumId: 5,
        },
      ])
    );
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <AlbumDisplay albums={albums} />
    </div>
  );
};

export default App;

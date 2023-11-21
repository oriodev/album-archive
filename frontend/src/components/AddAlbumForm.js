import React, { useState } from 'react';
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  TextField,
  Rating,
  Box,
  Typography,
  Container,
} from '@mui/material';

import { add, set } from '../reducers/albums';
import { useDispatch } from 'react-redux';
import { getAlbums } from '../utils/httpRequests';

const AddAlbumForm = ({ formOpen, setFormOpen }) => {
  const [albumTitle, setAlbumTitle] = useState('');
  const [albumArtist, setAlbumArtist] = useState('');
  const [albumCoverUrl, setAlbumCoverUrl] = useState('');
  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();

  const onClose = () => {
    // Reset form fields
    setAlbumTitle('');
    setAlbumArtist('');
    setAlbumCoverUrl('');
    setRating(0);

    setFormOpen(false);
  };

  const onSubmit = async ({
    albumTitle,
    albumArtist,
    albumCoverUrl,
    rating,
  }) => {
    const newAlbum = {
      album_title: albumTitle,
      album_artist: albumArtist,
      album_cover: albumCoverUrl,
      album_rating: rating,
    };

    try {
      const body = newAlbum;

      const response = await fetch('http://localhost:5000/albums', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.log(err.message);
    }

    getAlbums().then((albums) => {
      dispatch(set(albums));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation or other logic can be added here

    // Call the onSubmit prop with the form data
    onSubmit({ albumTitle, albumArtist, albumCoverUrl, rating });

    // Reset form fields
    setAlbumTitle('');
    setAlbumArtist('');
    setAlbumCoverUrl('');
    setRating(0);

    // Close the modal
    onClose();
  };

  return (
    <Modal
      open={formOpen}
      onClose={onClose}
      closeAfterTransition
      sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}
    >
      <Fade in={formOpen}>
        <Container
          maxWidth="sm"
          sx={{ backgroundColor: 'white', p: 3, borderRadius: 4 }}
        >
          <Box mt={4}>
            <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
              Add Album
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Album Title"
                variant="outlined"
                margin="normal"
                value={albumTitle}
                onChange={(e) => setAlbumTitle(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Album Artist"
                variant="outlined"
                margin="normal"
                value={albumArtist}
                onChange={(e) => setAlbumArtist(e.target.value)}
                required
              />
              <TextField
                fullWidth
                label="Album Cover URL"
                variant="outlined"
                margin="normal"
                value={albumCoverUrl}
                onChange={(e) => setAlbumCoverUrl(e.target.value)}
                required
              />
              <Box mt={2} mb={2}>
                <Typography component="legend" sx={{ color: 'black' }}>
                  Rating
                </Typography>
                <Rating
                  name="rating"
                  value={rating}
                  precision={1}
                  onChange={(event, newValue) => setRating(newValue)}
                />
              </Box>
              <Button type="submit" variant="contained" color="primary">
                Add Album
              </Button>
            </form>
          </Box>
        </Container>
      </Fade>
    </Modal>
  );
};

export default AddAlbumForm;

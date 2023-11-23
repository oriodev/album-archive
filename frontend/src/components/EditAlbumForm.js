import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  Fade,
  TextField,
  Rating,
  Box,
  Typography,
  Container,
} from '@mui/material';

const EditAlbumForm = ({
  editFormOpen,
  setEditFormOpen,
  editFormAlbum,
  setEditFormAlbum,
}) => {
  const defaultAlbum = {
    album_title: '',
    album_artist: '',
    album_cover: '',
    album_rating: 0,
  };

  const [album, setAlbum] = useState(defaultAlbum);

  useEffect(() => {
    if (editFormAlbum) {
      setAlbum(editFormAlbum);
    } else {
      setAlbum(defaultAlbum);
    }
  }, [editFormAlbum]);

  const onClose = () => {
    setAlbum(defaultAlbum);
    setEditFormOpen(false);
    setEditFormAlbum(null);
  };

  const onSubmit = async (editedAlbum) => {
    try {
      console.log(editedAlbum);
      // Perform any other actions with the edited album data
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation or other logic can be added here

    // Call the onSubmit prop with the form data
    onSubmit(album);

    // Reset form fields
    setAlbum(defaultAlbum);

    // Close the modal
    onClose();
  };

  return (
    <Modal
      open={editFormOpen}
      onClose={onClose}
      closeAfterTransition
      sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}
    >
      <Fade in={editFormOpen}>
        <Container
          maxWidth="sm"
          sx={{ backgroundColor: 'white', p: 3, borderRadius: 4 }}
        >
          <Box mt={4}>
            <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
              Edit Album
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label={'Album Title'}
                variant="outlined"
                margin="normal"
                value={album.album_title}
                onChange={(e) =>
                  setAlbum({ ...album, album_title: e.target.value })
                }
                required
                InputProps={{
                  style: { color: 'black' },
                }}
              />
              <TextField
                fullWidth
                label="Album Artist"
                variant="outlined"
                margin="normal"
                value={album.album_artist}
                onChange={(e) =>
                  setAlbum({ ...album, album_artist: e.target.value })
                }
                required
                InputProps={{
                  style: { color: 'black' },
                }}
              />
              <TextField
                fullWidth
                label="Album Cover URL"
                variant="outlined"
                margin="normal"
                value={album.album_cover}
                onChange={(e) =>
                  setAlbum({ ...album, album_cover: e.target.value })
                }
                required
                InputProps={{
                  style: { color: 'black' },
                }}
              />
              <Box mt={2} mb={2}>
                <Typography component="legend" sx={{ color: 'black' }}>
                  Rating
                </Typography>
                <Rating
                  name="rating"
                  value={parseInt(album.album_rating)}
                  precision={1}
                  onChange={(event, newValue) =>
                    setAlbum({ ...album, album_rating: newValue })
                  }
                />
              </Box>
              <Button type="submit" variant="contained" color="primary">
                Edit Album
              </Button>
            </form>
          </Box>
        </Container>
      </Fade>
    </Modal>
  );
};

export default EditAlbumForm;

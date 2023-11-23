import React, { useState } from 'react';

import Album from './Album';

import { useDispatch } from 'react-redux';
import { del } from '../reducers/albums';

import { Box, Button, Grid, Paper } from '@mui/material';
import { deleteAlbum } from '../utils/httpRequests';
import EditAlbumForm from './EditAlbumForm';
import { setMessage, setOn } from '../reducers/notifications';

const AlbumDisplay = ({ albums }) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [editFormAlbum, setEditFormAlbum] = useState(null);

  const dispatch = useDispatch();

  // handles pressing the delete button
  const deleteHandler = (id) => {
    try {
      // sends the post request
      deleteAlbum(id);
      // updates the state
      dispatch(del(id));

      // notification
      dispatch(setOn(true));
      dispatch(setMessage('album deleted'));
    } catch (error) {
      console.log(error.message);
    }
  };

  const editHandler = (album) => {
    setEditFormOpen(!editFormOpen);
    setEditFormAlbum(album);
  };

  return (
    <Box p={2} width="100%" display="flex" justifyContent="center">
      <EditAlbumForm
        editFormOpen={editFormOpen}
        setEditFormOpen={setEditFormOpen}
        editFormAlbum={editFormAlbum}
        setEditFormAlbum={setEditFormAlbum}
      />

      <Box width="70%">
        <Grid container spacing={2} justifyContent="center">
          {albums.map((album) => (
            <Grid item key={album.album_id} xs={12} sm={8} md={4} lg={4} xl={4}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                {/* displays the album info */}
                <Album album={album} />
                {/* displays the edit button */}
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => editHandler(album)}
                  sx={{ m: 1 }}
                >
                  Edit
                </Button>
                {/* displays the delete button */}
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => deleteHandler(album.album_id)}
                  sx={{ m: 1 }}
                >
                  Delete
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AlbumDisplay;

import React from 'react';

import Album from './Album';

import { Box, Button, Grid, Paper } from '@mui/material';

const AlbumDisplay = ({ albums }) => {
  return (
    <Box p={2} width="100%" display="flex" justifyContent="center">
      <Box width="70%">
        <Grid container spacing={2} justifyContent="center">
          {albums.map((album) => (
            <Grid item key={album.album_id} xs={12} sm={8} md={4} lg={4} xl={4}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                <Album album={album} />
                <Button variant="contained" size="small" sx={{ m: 1 }}>
                  Edit
                </Button>
                <Button variant="contained" size="small" sx={{ m: 1 }}>
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

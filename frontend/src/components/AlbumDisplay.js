import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const AlbumDisplay = ({ albums }) => {
  return (
    <Box p={2} width="100%" display="flex" justifyContent="center">
      <Grid container spacing={2} justifyContent="center">
        {albums.map((album) => (
          <Grid item key={album.albumId} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <img
                src={album.albumCover}
                alt={album.albumTitle}
                style={{ width: '100%', height: 'auto' }}
              />
              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ marginTop: 1 }}
              >
                {album.albumTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {album.albumArtist}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AlbumDisplay;

import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { ratingInStars } from '../utils/displayUtils';

const AlbumDisplay = ({ albums }) => {
  return (
    <Box p={2} width="100%" display="flex" justifyContent="center">
      <Box width="70%">
        <Grid container spacing={2} justifyContent="center">
          {albums.map((album) => (
            <Grid item key={album.album_id} xs={12} sm={8} md={4} lg={4} xl={4}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                <img
                  src={album.album_cover}
                  alt={album.album_title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Typography
                  variant="h6"
                  color="textSecondary"
                  sx={{ marginTop: 1 }}
                >
                  {album.album_title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {album.album_artist}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {ratingInStars(album.album_rating)}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AlbumDisplay;

import React from 'react';

import { ratingInStars } from '../utils/displayUtils';
import { Grid, Paper, Typography } from '@mui/material';

const Album = ({ album }) => {
  return (
    <>
      <img
        src={album.album_cover}
        alt={album.album_title}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <Typography variant="h6" color="textSecondary" sx={{ marginTop: 1 }}>
        {album.album_title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {album.album_artist}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {ratingInStars(album.album_rating)}
      </Typography>
    </>
  );
};

export default Album;

import React from 'react';
import Album from './Album';

const AlbumDisplay = () => {
  return (
    <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
    </div>
  );
};

export default AlbumDisplay;

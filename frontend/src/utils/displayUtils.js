// turns the numerical rating into star emojis for display

export const ratingInStars = (album_rating) => {
  const albumRating = parseInt(album_rating);

  try {
    return Array(albumRating).fill('⭐').join('');
  } catch (error) {
    console.log(error.message);
    console.debug(
      'this usually gets triggered bc u didnt put something in props'
    );
  }
};

// -------
// SORTING
// -------

export const sortedHighToLow = (albumList) =>
  albumList.sort((a, b) => b.album_rating - a.album_rating);

export const sortedLowToHigh = (albumList) =>
  albumList.sort((a, b) => a.album_rating - b.album_rating);

export const sortHandler = (sortDirection, setSortDirection) => {
  if (sortDirection === 'highToLow') {
    setSortDirection('lowToHigh');
  } else if (sortDirection === 'lowToHigh') {
    setSortDirection('highToLow');
  }
};

export const sortedAlbumsList = (sortDirection, albumList) => {
  if (sortDirection === 'highToLow') {
    return sortedHighToLow(albumList);
  } else if (sortDirection === 'lowToHigh') {
    return sortedLowToHigh(albumList);
  } else {
    return [];
  }
};

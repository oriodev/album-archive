const baseUrl = 'http://localhost:5000/albums';

export const getAlbums = async (dispatch) => {
  try {
    const response = await fetch(baseUrl);
    const jsonData = await response.json();

    return jsonData;
  } catch (err) {
    console.error(err.message);
  }
};

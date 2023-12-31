const baseUrl = 'http://localhost:5000/albums';

export const getAlbums = async () => {
  try {
    const response = await fetch(baseUrl);
    const jsonData = await response.json();

    return jsonData;
  } catch (err) {
    console.error(err.message);
  }
};

export const postAlbum = async (body) => {
  try {
    const response = await fetch('http://localhost:5000/albums', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAlbum = async (id) => {
  await fetch(`http://localhost:5000/albums/${id}`, {
    method: 'DELETE',
  });
};

export const editAlbum = async (id, body) => {
  try {
    const response = await fetch(`http://localhost:5000/albums/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    return response;
  } catch (error) {
    console.log(error.message);
  }
};

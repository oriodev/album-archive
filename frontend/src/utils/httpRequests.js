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

export const postAlbum = async (body) =>
  await fetch('http://localhost:5000/albums', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

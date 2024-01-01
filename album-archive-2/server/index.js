// all the dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors()); // allows communication between frontend & backend
app.use(express.json()); // parses json when sending requests (req.body)

// routes

// create an album

app.post('/albums', async (req, res) => {
  try {
    const { album_cover, album_artist, album_title, album_rating } = req.body;

    const newAlbum = await pool.query(
      'INSERT INTO albums (album_cover, album_artist, album_title, album_rating) VALUES($1, $2, $3, $4) RETURNING *',
      [album_cover, album_artist, album_title, album_rating]
    );

    res.json(newAlbum.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// get all albums

app.get('/albums', async (req, res) => {
  try {
    const allAlbums = await pool.query('SELECT * FROM albums');

    res.json(allAlbums.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// get a specific album

app.get('/albums/:album_id', async (req, res) => {
  try {
    const { album_id } = req.params;

    const album = await pool.query('SELECT * FROM albums WHERE album_id = $1', [
      album_id,
    ]);

    res.json(album.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// edit an album

app.put('/albums/:album_id', async (req, res) => {
  try {
    const { album_id } = req.params;
    const { album_cover, album_artist, album_title, album_rating } = req.body;

    const updateAlbum = await pool.query(
      'UPDATE albums SET album_cover = $1, album_artist = $2, album_title = $3, album_rating = $4 WHERE album_id = $5',
      [album_cover, album_artist, album_title, album_rating, album_id]
    );

    res.json('album was updated!');
  } catch (err) {
    console.log(err.message);
  }
});

// delete an album

app.delete('/albums/:album_id', async (req, res) => {
  try {
    const { album_id } = req.params;
    console.log(album_id);

    const deletedAlbum = await pool.query(
      'DELETE FROM albums WHERE album_id = $1',
      [album_id]
    );

    res.json('Album was deleted!');
  } catch (err) {
    console.log(err.message);
  }
});

// sets up the server
try {
  app.listen(5000, () => {
    console.log('server has started on port 5000');
  });
} catch (err) {
  console.log('error is: ', err);
}

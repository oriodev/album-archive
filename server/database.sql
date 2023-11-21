CREATE DATABASE albumzApp;

CREATE TABLE albums (
    albumId SERIAL PRIMARY KEY,
    albumTitle TEXT,
    albumArtist TEXT,
    albumCover TEXT,
    albumRating NUMERIC CHECK (album_rating >= 1 AND album_rating <= 5)
);

SELECT * FROM albums;
CREATE TABLE cinema (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  cinemaName TEXT NOT NULL,
);

CREATE TABLE cinema_seats (
  cinemaId INTEGER,
  seatNumber INTEGER NOT NULL,
  status TEXT NOT NULL,
  FOREIGN KEY (cinemaId) REFERENCES cinema (id)
);
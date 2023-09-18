import express, { Express } from "express";
import CinemaValidation from "../middlewares/CinemaValidation";
import CinemaController from "../controller/CinemaController";

const cinema: Express = express();

cinema.post("/", CinemaValidation, CinemaController.create);
cinema.post("/seatBook", CinemaController.seatBook);
cinema.post("/consecutiveSeats", CinemaController.consecutiveSeats);

export default cinema;

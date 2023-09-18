import httpStatus from "http-status";
import { Request, Response } from "express";
import CinemaService from "../services/CinemaService";

export default class CinemaController {
  private static cinemaService: CinemaService = new CinemaService();

  public static create = async (req: Request, res: Response) => {
    const { cinemaName, numberOfSeats } = req.body;

    const result = await this.cinemaService.create(cinemaName, numberOfSeats);

    res.status(httpStatus.CREATED).json(result);
  };

  public static seatBook = async (req: Request, res: Response) => {
    const { cinemaId, seatNumber } = req.body;

    await this.cinemaService.seatBook(cinemaId, seatNumber);

    res.status(httpStatus.CREATED).json(seatNumber);
  };

  public static consecutiveSeats = async (req: Request, res: Response) => {
    const { cinemaId } = req.body;

    const result = await this.cinemaService.consecutiveSeats(cinemaId);

    res.status(httpStatus.CREATED).json(result);
  };
}

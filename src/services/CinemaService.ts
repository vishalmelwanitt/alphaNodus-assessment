import connection from "../models/connection";
import CinemaModel from "../models/CinemaModel";

export default class CinemaService {
  private cinemaModel: CinemaModel;

  public constructor() {
    this.cinemaModel = new CinemaModel(connection);
  }

  public async create(
    cinemaName: string,
    numberOfSeats: number
  ): Promise<object> {
    return this.cinemaModel.create(cinemaName, numberOfSeats);
  }

  public async seatBook(cinemaId: number, seatNumber: number) {
    this.cinemaModel.seatBook(cinemaId, seatNumber);
  }

  public async consecutiveSeats(cinemaId: number): Promise<object> {
    return this.cinemaModel.consecutiveSeats(cinemaId);
  }
}

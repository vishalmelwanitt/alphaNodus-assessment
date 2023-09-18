import { ResultSetHeader, FieldPacket, Pool } from "mysql2/promise";

export default class CinemaModel {
  private connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(
    cinemaName: string,
    numberOfSeats: number
  ): Promise<object> {
    const insertCinemaQuery = "INSERT INTO cinema VALUES (null, ?)";

    const insertSeatsQuery = "INSERT INTO cinema_seats VALUES (?, ?, ?)";

    const [{ insertId: id }]: [ResultSetHeader, FieldPacket[]] =
      await this.connection.execute<ResultSetHeader>(insertCinemaQuery, [
        cinemaName,
      ]);

    Array.from(Array(numberOfSeats).keys()).forEach(async (seatNumber) => {
      await this.connection.execute(insertSeatsQuery, [
        id,
        seatNumber,
        "EMPTY",
      ]);
    });

    return { id };
  }

  public async seatBook(cinemaId: number, seatNumber: number) {
    const updateQuery =
      'UPDATE cinema_seats SET status = "Booked" WHERE cinemaId = ? AND seatNumber = ?';

    await this.connection.execute<ResultSetHeader>(updateQuery, [
      cinemaId,
      seatNumber,
    ]);
  }

  public async consecutiveSeats(cinemaId: number): Promise<object> {
    const query =
      "select top 1 * from cinema_seats cs1 inner join cinema_seats cs2 on cs1.id = cs2.id - 1 where cs1.status = 'EMPTY' and cs2.status = 'EMPTY' and cinemaId = ? order by cs1.id desc";

    const [result] = await this.connection.execute(query, [cinemaId]);

    return result;
  }
}

import type { IBoard } from "../domain/entities";

export interface IBoardRepository {
  getBoards(): Promise<IBoard[]>;
  postBoard(board: IBoard): Promise<IBoard>;
}

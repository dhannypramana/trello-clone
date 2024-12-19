import type { IBoard } from "../domain/entities";
import type { IBoardRepository } from ".";
import { BoardEndpoints } from "../endpoints/boardEndpoints";

const boardEndpoints = new BoardEndpoints({ baseURL: "http://localhost:3001" });

export class BoardRepository implements IBoardRepository {
  async getBoards(): Promise<IBoard[]> {
    return await $fetch<IBoard[]>(boardEndpoints.get(), { method: "GET" });
  }
  async postBoard(board: IBoard): Promise<IBoard> {
    return await $fetch<IBoard>(boardEndpoints.get(), {
      method: "POST",
      body: {
        id: board.id,
        title: board.title,
      },
    });
  }
}

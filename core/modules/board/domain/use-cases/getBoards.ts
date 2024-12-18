import { BoardRepository } from "../../infrastucture";
import type { IBoard } from "../entities";

export class GetBoards {
  boardRepository: BoardRepository;

  constructor(boardRepository: BoardRepository) {
    this.boardRepository = boardRepository;
  }

  async execute(): Promise<IBoard[]> {
    return this.boardRepository.getBoards();
  }
}

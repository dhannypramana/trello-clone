import { BoardRepository } from "../../infrastucture";
import { Board, type IBoard } from "../entities";

export class PostBoard {
  boardRepository: BoardRepository;

  constructor(boardRepository: BoardRepository) {
    this.boardRepository = boardRepository;
  }

  async execute({ title }: IBoard): Promise<IBoard> {
    const board = new Board({ title });
    board.validate();
    return await this.boardRepository.postBoard(board);
  }
}

import type { IBoard } from "~/core/modules/board/domain/entities";
import { GetBoards } from "~/core/modules/board/domain/use-cases";
import { BoardRepository } from "~/core/modules/board/infrastucture";

const boards = ref<IBoard[]>([]);

export const useBoardRead = () => {
  const boardRepository = new BoardRepository();
  const getBoardsUseCase = new GetBoards(boardRepository);

  const getBoards = async () => {
    boards.value = await getBoardsUseCase.execute();
  };

  return {
    boards,
    getBoards,
  };
};

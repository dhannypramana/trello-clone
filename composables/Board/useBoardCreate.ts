import { PostBoard } from "~/core/modules/board/domain/use-cases/postBoard";
import { BoardRepository } from "~/core/modules/board/infrastucture";

export const useBoardCreate = () => {
  const boardRepository = new BoardRepository();
  const boardCreateUseCase = new PostBoard(boardRepository);
  const { getBoards } = useBoardRead();

  const postBoard = async (title: string) => {
    const board = await boardCreateUseCase.execute({ title });
    await getBoards();

    return board;
  };

  return {
    postBoard,
  };
};

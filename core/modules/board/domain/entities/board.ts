import type { IBoard } from ".";

export class Board implements IBoard {
  id: string;
  title: string;

  constructor({ id, title }: IBoard) {
    this.id = id;
    this.title = title;
  }

  validate(): boolean {
    if (!this.title.trim()) {
      throw new Error("Board title cannot be emptyy");
    }

    return true;
  }
}

import type { IBoard } from ".";

export class Board implements IBoard {
  readonly id: string;
  title: string;

  constructor({ title }: IBoard) {
    this.id = generateUuid();
    this.title = title;
  }

  validate(): boolean {
    if (!this.title.trim()) {
      throw new Error("Board title cannot be emptyy");
    }

    return true;
  }
}

export class BoardEndpoints {
  baseURL: string;

  constructor({ baseURL }: { baseURL: string }) {
    this.baseURL = baseURL;
  }

  get() {
    return `${this.baseURL}/boards`;
  }
}

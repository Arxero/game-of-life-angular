export class Cell {
  col: number;
  row: number;
  private state = false;
  private tempState = false;

  constructor(col: number, row: number) {
    this.col = col;
    this.row = row;
  }

  setTempState(state: boolean) {
    this.tempState = state;
  }

  updateState() {
    this.state = this.tempState;
  }

  toggleState() {
    this.tempState = !this.tempState;
    this.updateState();
  }

  isAlive(): boolean {
    return this.state;
  }

  reset() {
    this.state = false;
    this.tempState = false;
  }
}

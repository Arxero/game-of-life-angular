import { Injectable } from '@angular/core';
import { Cell } from './Cell';

@Injectable({
  providedIn: 'root',
})
export class LifeService {
  private cols: number;
  private rows: number;
  private cells: Cell[] = [];
  generationCount = 0;

  createGrid(cols: number, rows: number) {
    this.cols = cols;
    this.rows = rows;
    const totalCells = this.cols * this.rows;

    for (let i = 0; i < totalCells; i++) {
      this.cells.push(new Cell(Math.floor(i / this.cols), i % this.cols));
    }
  }

  getGrid(): Cell[][] {
    const grid: Cell[][] = [];
    for (let i = 0; i < this.rows; i++) {
      // just slicing the array by equal parts so we can have for each row 35 cells
      grid.push(this.cells.slice(i * this.cols, (i + 1) * this.cols));
    }
    return grid;
  }

  evolve() {
    this.cells.forEach((x) => {
      const aliveAdjecentCells = this.getAdjacentCells(x);

      if (aliveAdjecentCells.length === 3) {
        x.setTempState(true);
      } else if (aliveAdjecentCells.length !== 2) {
        x.setTempState(false);
      }
    });

    this.generationCount++;
    this.cells.forEach((cell) => cell.updateState());
  }

  private getAdjacentCells(cell: Cell): Cell[] {
    const { row, col } = cell;
    const adjacentCellsCordinates = [
      { row: row - 1, col: col - 1 },
      { row: row - 1, col: col },
      { row: row - 1, col: col + 1 },

      { row: row + 1, col: col - 1 },
      { row: row + 1, col: col },
      { row: row + 1, col: col + 1 },

      { row: row, col: col - 1 },
      { row: row, col: col + 1 },
    ];

    return adjacentCellsCordinates
      .filter((cords) => this.isCordinatesInBoundries(cords))
      .map((coords) => this.getCellAt(coords.col, coords.row))
      .filter((c) => c.isAlive());
  }

  private getCellAt(col: number, row: number): Cell {
    return this.cells[col * this.cols + row];
  }

  private isCordinatesInBoundries({ row, col }): boolean {
    const isRowInBoundries = row >= 0 && row < this.rows;
    const isCoInBoundries = col >= 0 && col < this.cols;
    return isRowInBoundries && isCoInBoundries;
  }

  reset() {
    this.cells.forEach((cell) => cell.reset());
    this.generationCount = 0;
  }

  isAllDead(): boolean {
    return this.cells.every((x) => !x.isAlive());
  }

  generateRandomAliveCells() {
    this.reset();
    this.cells.forEach((cell) => {
      return Math.random() < 0.3 ? cell.toggleState() : null;
    });
  }
}

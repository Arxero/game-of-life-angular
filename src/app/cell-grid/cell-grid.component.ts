import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../Cell';
import { LifeService } from '../life.service';

@Component({
  selector: 'app-cell-grid',
  templateUrl: './cell-grid.component.html',
  styleUrls: ['./cell-grid.component.css'],
})
export class CellGridComponent implements OnInit {
  grid: Cell[][];

  constructor(private lifeService: LifeService) {}

  ngOnInit(): void {
    this.grid = this.lifeService.getGrid();
  }

  onCellClick(cell: Cell) {
    cell.toggleState();
  }
}

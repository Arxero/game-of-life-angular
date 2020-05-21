import { Component, OnInit } from '@angular/core';
import { LifeService } from './life.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cols = 35;
  rows = 35;

  constructor(private lifeService: LifeService) {}

  ngOnInit(): void {
    this.lifeService.createGrid(this.cols, this.rows);
  }
}

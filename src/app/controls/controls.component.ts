import { Component, OnInit } from '@angular/core';
import { LifeService } from '../life.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent {
  interval;
  isEvolution: boolean;
  speed = 100;

  get generations() {
    return this.lifeService.generationCount;
  }

  constructor(
    private lifeService: LifeService,
    private matSnackBar: MatSnackBar
  ) {}

  onPlayClicked() {
    this.isEvolution = true;
    this.interval = setInterval(() => {
      if (this.lifeService.isAllDead()) {
        this.matSnackBar.open('All cells are dead!', 'CLOSE', {
          duration: 2000,
        });
        this.onStopClicked();
        return;
      }
      this.lifeService.evolve();
    }, this.speed);
  }

  onStopClicked() {
    clearInterval(this.interval);
    this.isEvolution = false;
  }

  onResetClicked() {
    this.onStopClicked();
    this.lifeService.reset();
  }

  onRandomClicked() {
    this.lifeService.generateRandomAliveCells();
  }
}

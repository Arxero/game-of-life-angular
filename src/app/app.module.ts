import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { FormsModule } from '@angular/forms';
import { ControlsComponent } from './controls/controls.component';
import { CellGridComponent } from './cell-grid/cell-grid.component';
import { LifeService } from './life.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    CellGridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
  ],
  providers: [LifeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

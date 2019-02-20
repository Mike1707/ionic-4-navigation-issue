import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Segment3Component } from './segment3.component';

@NgModule({
  declarations: [
    Segment3Component,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    Segment3Component,
  ],
})
export class Segment3Module {
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Segment2Component } from './segment2.component';

@NgModule({
  declarations: [
    Segment2Component,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    Segment2Component,
  ],
})
export class Segment2Module {
}

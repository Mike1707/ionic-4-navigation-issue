import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Segment1Component } from './segment1.component';

@NgModule({
  declarations: [
    Segment1Component,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    Segment1Component,
  ],
})
export class Segment1Module {
}

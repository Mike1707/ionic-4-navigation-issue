import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Segment1Component } from '../components/segment1/segment1.component';
import { Segment2Component } from '../components/segment2/segment2.component';
import { Segment3Component } from '../components/segment3/segment3.component';
import { Segment1Module } from '../components/segment1/segment1.module';
import { Segment2Module } from '../components/segment2/segment2.module';
import { Segment3Module } from '../components/segment3/segment3.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: '',
        redirectTo: 'segment1'
      },
      {
        path: 'segment1',
        component: Segment1Component,
      },
      {
        path: 'segment2',
        component: Segment2Component,
      },
      {
        path: 'segment3',
        component: Segment3Component
      }
    ]
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    Segment1Module,
    Segment2Module,
    Segment3Module
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
}

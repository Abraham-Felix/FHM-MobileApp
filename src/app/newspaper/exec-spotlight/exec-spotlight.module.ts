import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExecSpotlightPage } from './exec-spotlight.page';

const routes: Routes = [
  {
    path: '',
    component: ExecSpotlightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExecSpotlightPage]
})
export class ExecSpotlightPageModule {}

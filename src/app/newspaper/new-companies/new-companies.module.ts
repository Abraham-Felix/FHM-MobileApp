import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewCompaniesPage } from './new-companies.page';

const routes: Routes = [
  {
    path: '',
    component: NewCompaniesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewCompaniesPage]
})
export class NewCompaniesPageModule {}

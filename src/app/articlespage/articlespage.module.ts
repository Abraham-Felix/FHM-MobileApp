import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArticlespagePage } from './articlespage.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlespagePage
  }
];

@NgModule({
  imports: [
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArticlespagePage]
})
export class ArticlespagePageModule {}

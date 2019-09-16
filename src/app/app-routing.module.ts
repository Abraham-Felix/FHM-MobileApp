import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'newspaper', loadChildren: './newspaper/newspaper.module#NewspaperPageModule' },
  { path: 'articles', loadChildren: './newspaper/articles/articles.module#ArticlesPageModule' },
  { path: 'webnews', loadChildren: './newspaper/webnews/webnews.module#WebnewsPageModule' },
  { path: 'new-companies', loadChildren: './newspaper/new-companies/new-companies.module#NewCompaniesPageModule' },
  { path: 'executive-news', loadChildren: './newspaper/executive-news/executive-news.module#ExecutiveNewsPageModule' },
  { path: 'exec-spotlight', loadChildren: './newspaper/exec-spotlight/exec-spotlight.module#ExecSpotlightPageModule' },
  { path: 'newsletter', loadChildren: './newspaper/newsletter/newsletter.module#NewsletterPageModule' },
  { path: 'tweets', loadChildren: './newspaper/tweets/tweets.module#TweetsPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

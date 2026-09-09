import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesPageModule)
  },
  {
    path: 'me',
    loadChildren: () => import('./me/me.module').then(m => m.MePageModule)
  },
  {
    path: 'movie-detail',
    loadChildren: () => import('./movie-detail/movie-detail.module').then(m => m.MovieDetailPageModule)
  },
  {
    path: 'movie-detail/:id',
    loadChildren: () => import('./movie-detail/movie-detail.module').then(m => m.MovieDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
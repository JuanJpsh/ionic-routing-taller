import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    pathMatch: 'full',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'dashboard/:id',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'course',
    loadChildren: () => import('./pages/course/course.module').then( m => m.CoursePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

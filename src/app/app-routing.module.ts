import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { LoggedInGuard } from './shared/guards/logged-in.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pokemon',
    canActivate: [ LoggedInGuard ],
    component: LayoutComponent,
    loadChildren: ()=> import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

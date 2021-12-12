import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/authorization/login-page/login-page.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { NotFoundPageComponent } from './components/common/not-found-page/not-found-page.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login' , pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', loadChildren: () => import('./modules/lazy-loaded/lazy-loaded.module').then(m => m.LazyLoadedModule)},
  { path: 'main', component: MessengerComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

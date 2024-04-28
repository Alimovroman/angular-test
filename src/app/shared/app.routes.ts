import { Routes } from '@angular/router'
// import { Test2Component } from '../home/components/test2/test2.component'
import { LoginComponent } from '../auth/components/login/login.component'
import { Todos } from '../todos/components/todos/todos.component'
import { FruitsComponent } from '../fruits/components/fruits/fruits.component'
import { PageNotFoundComponent } from '../home/components/page-not-found/page-not-found.component'
import { UsersComponent } from '../users/components/users/users.component'
import { ProfileComponent } from '../profile/components/profile/profile.component'
import { authGuard } from '../guard/auth.guard'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
  },
  { path: 'todos', component: FruitsComponent, canActivate: [authGuard] },
  { path: 'fruits', component: Todos, canActivate: [authGuard] },
  { path: 'users', component: UsersComponent, canActivate: [authGuard] },
  { path: 'profile/:userId', component: ProfileComponent, canActivate: [authGuard] },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
]

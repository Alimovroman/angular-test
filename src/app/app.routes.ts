import { Routes } from '@angular/router'
import { Test2Component } from './components/test2/test2.component'
import { LoginComponent } from './components/login/login.component'
import { Todos } from './components/todos/todos.component'
import { FruitsComponent } from './components/fruits/fruits.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { UsersComponent } from './components/users/users.component'
import { ProfileComponent } from './components/profile/profile.component'
import { authGuard } from './guard/auth.guard'

export const routes: Routes = [
  { path: '', component: Test2Component },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: FruitsComponent, canActivate: [authGuard] },
  { path: 'fruits', component: Todos, canActivate: [authGuard] },
  { path: 'users', component: UsersComponent, canActivate: [authGuard] },
  { path: 'profile/:userId', component: ProfileComponent, canActivate: [authGuard] },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
]

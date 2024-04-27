import { Routes } from '@angular/router'
import { Test2Component } from './test2/test2.component'
import { LoginComponent } from './login/login.component'
import { Todos } from './todos/todos.component'
import { FruitsComponent } from './fruits/fruits.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { UsersComponent } from './users/users.component'
import { ProfileComponent } from './profile/profile.component'

export const routes: Routes = [
  { path: '', component: Test2Component },
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: FruitsComponent },
  { path: 'fruits', component: Todos },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
]

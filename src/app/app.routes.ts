import { Routes } from '@angular/router'
import { Test2Component } from './components/test2/test2.component'
import { LoginComponent } from './components/login/login.component'
import { Todos } from './components/todos/todos.component'
import { FruitsComponent } from './components/fruits/fruits.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { UsersComponent } from './components/users/users.component'
import { ProfileComponent } from './components/profile/profile.component'

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

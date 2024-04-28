import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { authGuard } from '../guard/auth.guard'
import { Todos } from './components/todos/todos.component'

const routes: Routes = [{ path: 'todos', component: Todos, canActivate: [authGuard] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UsersComponent } from './components/users/users.component'
import { authGuard } from '../guard/auth.guard'

const routes: Routes = [{ path: 'users', component: UsersComponent, canActivate: [authGuard] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}

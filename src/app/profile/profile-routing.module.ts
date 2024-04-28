import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './components/profile/profile.component'
import { authGuard } from '../guard/auth.guard'

const routes: Routes = [
  { path: 'profile/:userId', component: ProfileComponent, canActivate: [authGuard] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

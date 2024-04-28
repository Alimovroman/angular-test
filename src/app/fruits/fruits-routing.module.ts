import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FruitsComponent } from './components/fruits/fruits.component'
import { authGuard } from '../guard/auth.guard'

const routes: Routes = [{ path: 'fruits', component: FruitsComponent, canActivate: [authGuard] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitsRoutingModule {}

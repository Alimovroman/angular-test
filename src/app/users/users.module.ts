import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './components/users/users.component'
import { RouterLink } from '@angular/router'

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, RouterLink],
  exports: [],
})
export class UsersModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { Test2Component } from './components/test2/test2.component'

@NgModule({
  declarations: [Test2Component],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}

import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Test1Component } from './test1/test1.component'
import { Test2Component } from './test2/test2.component'
import { FormsModule } from '@angular/forms'

interface IUser {
  name: string
  lastName: string
  age: number
  city: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Test1Component, Test2Component, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  appTitle = 'Instagram'
  appText = ''
  user: IUser = {
    name: 'Roman',
    lastName: 'Ivanov',
    age: 33,
    city: 'Ryazan',
  }
  isDisableButton = true

  onChangeTitle() {
    this.appTitle = this.appText
  }
  onChangeText(event: Event) {
    this.appText = (event.currentTarget as HTMLInputElement).value
    if (this.appText === '') {
      this.isDisableButton = true
    } else {
      this.isDisableButton = false
    }
  }
}

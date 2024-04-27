import { Component, OnInit } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { Test1Component } from './components/test1/test1.component'
import { Test2Component } from './components/test2/test2.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { FruitsComponent } from './components/fruits/fruits.component'
import { CompAComponent } from './components/comp-a/comp-a.component'
import { ValueService } from '../services/service.value'
import { CompBComponent } from './components/comp-b/comp-b.component'
import { Todos } from './components/todos/todos.component'
import { HttpClientModule } from '@angular/common/http'
import { TodosService } from '../services/todos.service'
import { LoginComponent } from './components/login/login.component'
import { UsersService } from '../services/users.service'
import { ProfileService } from '../services/profile.service'
import { AuthService } from '../services/auth.service'

interface IUser {
  name: string
  lastName: string
  age: number
  city: string
}
interface WeekGrade {
  id: number
  gradesItem: Number
}
interface Lessons {
  id: number
  title: string
  weekGrades: WeekGrade[]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FruitsComponent,
    Test1Component,
    Test2Component,
    FormsModule,
    CommonModule,
    CompAComponent,
    CompBComponent,
    Todos,
    HttpClientModule,
    ReactiveFormsModule,
    LoginComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ValueService, TodosService, UsersService, ProfileService],
})
export class AppComponent implements OnInit {
  maths: string[] = ['rus: 3', 'en: 4']
  newMath?: string
  appTitle = 'Instagram'
  appText = ''
  user: IUser = {
    name: 'Roman',
    lastName: 'Ivanov',
    age: 33,
    city: 'Ryazan',
  }
  isDisableButton = true
  lessons: Lessons[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradesItem: 5,
        },
        {
          id: 1,
          gradesItem: 2,
        },
        {
          id: 2,
          gradesItem: 3,
        },
      ],
    },
    {
      id: 1,
      title: 'Phisic',
      weekGrades: [
        {
          id: 0,
          gradesItem: 5,
        },
        {
          id: 1,
          gradesItem: 4,
        },
        {
          id: 2,
          gradesItem: 3,
        },
      ],
    },
  ]
  isLoading = true
  value = ''

  constructor(private authService: AuthService) {
    setTimeout(() => {
      this.isLoading = !this.isLoading
    }, 3000)
  }
  ngOnInit(): void {
    this.authService.authMe()
  }
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
  getGrade(value: string) {
    this.maths.push(value)
    this.newMath = value
  }
}

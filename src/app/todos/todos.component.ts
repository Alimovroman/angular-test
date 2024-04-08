import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

interface BaseResTodo<T = {}> {
  data: T
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}
interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

@Component({
  selector: 'todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  imports: [CommonModule],
})
export class Todos implements OnInit {
  todos: Todo[] = []
  todosHttpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': 'ffdb5a84-7670-48ab-a1c2-5437e028d270',
    },
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTodo()
  }

  getTodo() {
    this.http
      .get<Todo[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', this.todosHttpOptions)
      .subscribe(res => {
        this.todos = res
      })
  }
  createTodo() {
    const randomNamber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNamber
    this.http
      .post<
        BaseResTodo<{ item: Todo }>
      >('https://social-network.samuraijs.com/api/1.1/todo-lists', { title }, this.todosHttpOptions)
      .subscribe(res => {
        this.todos.unshift(res.data.item)
      })
  }
  deleteTodo(id: string) {
    this.http
      .delete<BaseResTodo>(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`,
        this.todosHttpOptions
      )
      .subscribe(res => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }
}

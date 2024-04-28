import { BeautyService } from '../../core/services/beauty.service'
import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, EMPTY, Observable, catchError, map, throwError } from 'rxjs'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])
  todosHttpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': environment.apiKey,
    },
  }

  constructor(
    private http: HttpClient,
    private beautyservice: BeautyService
  ) {}

  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseUrl}todo-lists`, this.todosHttpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe({
        next: todos => {
          this.todos$.next(todos)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        },
      })
  }
  createTodo(title: string) {
    this.http
      .post<BaseResTodo<{ item: Todo }>>(
        `${environment.baseUrl}todo-lists`,
        { title },
        this.todosHttpOptions
      )
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(res => {
          const todos = this.todos$.getValue()
          return [res.data.item, ...todos]
        })
      )
      .subscribe({
        next: res => {
          this.todos$.next(res)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        },
      })
  }
  deleteTodo(id: string) {
    this.http
      .delete<BaseResTodo>(`${environment.baseUrl}todo-lists/${id}`, this.todosHttpOptions)
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          let todos = this.todos$.getValue()
          return todos.filter(t => t.id !== id)
        })
      )
      .subscribe({
        next: todos => {
          this.todos$.next(todos)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message)
        },
      })
  }

  private errorHandler(err: HttpErrorResponse) {
    this.beautyservice.log(err.message, 'error')
    return EMPTY
  }
}

//types
export interface BaseResTodo<T = {}> {
  data: T
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
}
export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

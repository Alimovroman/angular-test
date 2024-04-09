import { CommonModule } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Todo, TodosService } from '../../services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'todos',
  standalone: true,
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  imports: [CommonModule],
})
export class Todos implements OnInit {
  todos$: Observable<Todo[]> = new Observable()
  error = ''

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos()
  }

  createTodo() {
    const randomNamber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNamber
    this.todosService.createTodo(title)
  }
  deleteTodo(id: string) {
    this.todosService.deleteTodo(id)
  }
}

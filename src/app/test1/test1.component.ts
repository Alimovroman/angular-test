import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss',
})
export class Test1Component {
  name = 'Misha'
  inputGrade = ''
  isSuccess = true

  @Input() lastName?: string
  @Input() city?: string
  @Output() sendGrade = new EventEmitter<string>()

  onSendGrade() {
    this.sendGrade.emit(this.inputGrade)
  }
  constructor() {
    setTimeout(() => {
      this.isSuccess = !this.isSuccess
    }, 3000)
  }
}

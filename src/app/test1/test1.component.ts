import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss',
})
export class Test1Component {
  name = 'Misha'
  inputGrade = ''

  @Input() lastName?: string
  @Input() city?: string
  @Output() sendGrade = new EventEmitter<string>()

  onSendGrade() {
    this.sendGrade.emit(this.inputGrade)
  }
}

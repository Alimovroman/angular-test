import { Component, OnInit } from '@angular/core'
import { ValueService } from '../../../services/service.value'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs'
import { BeautyService } from '../../../services/beauty.service'

@Component({
  selector: 'inst-comp-b',
  standalone: true,
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
  imports: [CommonModule],
})
export class CompBComponent implements OnInit {
  value$ = new Observable()

  constructor(
    private valueService: ValueService,
    private beautyService: BeautyService
  ) {}

  ngOnInit(): void {
    // this.valueService.value$.subscribe(value => {
    //   this.value = value
    // })
    this.value$ = this.valueService.value$
  }
  onDecValue() {
    this.valueService.dec()
    this.beautyService.log('dec value', 'info')
  }
}

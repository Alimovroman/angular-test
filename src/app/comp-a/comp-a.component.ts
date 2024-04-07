import { Component, OnInit } from '@angular/core'
import { ValueService } from '../../services/service.value'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs'
import { BeautyService } from '../../services/beauty.service'

@Component({
  selector: 'inst-comp-a',
  standalone: true,
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
  imports: [CommonModule],
})
export class CompAComponent implements OnInit {
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
  onAddValue() {
    this.valueService.add()
    this.beautyService.log('add value', 'success')
  }
}

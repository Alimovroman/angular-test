import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

interface Fruit {
  id: number
  name: string
  price: number
}

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css',
})
export class FruitsComponent {
  fruitsUrl = 'http:/www.fruits.com'
  date = new Date()
  fruits: Fruit[] = [
    { id: 1, name: 'aadad', price: 100 },
    { id: 2, name: 'aada123d', price: 207 },
    { id: 3, name: 'a55adad', price: 120 },
    { id: 4, name: 'aaszdad', price: 150 },
    { id: 5, name: 'aad2ad', price: 106 },
    { id: 6, name: 'aa786dad', price: 600 },
    { id: 7, name: 'aads ad', price: 140 },
    { id: 8, name: 'aad  ss ad', price: 301 },
    { id: 9, name: 'aad 2313 ss ad', price: 500 },
  ]
}

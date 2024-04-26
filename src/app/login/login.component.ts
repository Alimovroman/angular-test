import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  // email = new FormControl('initial value')

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/gmail.com/)]),
    password: new FormControl(''),
  })

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.')
  }
  onSubmit() {
    console.log(this.loginForm.value)
  }
  get email() {
    return this.loginForm.get('email')
  }
}

import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'

interface AuthMeResponse {
  resultCode: ResultCodes
  fieldsErrors: string[]
  messages: string[]
  data: {
    id: number
    email: string
    login: string
  }
}

enum ResultCodes {
  success = 0,
  error = 1,
  captcha = 10,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient) {}

  authMe() {
    this.http.get<AuthMeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe(res => {
      if (res.resultCode === ResultCodes.success) {
        this.isAuth = true
      }
    })
  }
}

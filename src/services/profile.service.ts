import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'
import { Observable, map } from 'rxjs'

export interface ProfileResponse {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: Contacts
  photos: { small: string | null; large: string | null }
}
interface Contacts {
  github?: string
  vk?: string
  facebook?: string
  instagram?: string
  twitter?: string
  website?: string
  youtube?: string
  mainLink?: string
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  httpOptions = {
    headers: new HttpHeaders().append('api-key', environment.apiKey),
    withCredentials: true,
  }

  constructor(private http: HttpClient) {}

  getProfile(userId: number): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(
      `${environment.baseNetworkUrl}/profile/${userId}`,
      this.httpOptions
    )
  }
}

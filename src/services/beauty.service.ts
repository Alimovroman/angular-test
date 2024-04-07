import { Injectable } from '@angular/core'

type Severity = 'error' | 'success' | 'info'

@Injectable({
  providedIn: 'root',
})
export class BeautyService {
  log(title: string, severity: Severity) {
    const style = this.getSeverity(severity)
    console.log(`%c${title}`, style)
  }
  getSeverity(severity: Severity) {
    switch (severity) {
      case 'error':
        return 'background: red; color: white; font-size: x-large'
      case 'success':
        return 'background: green; color: white; font-size: x-large'
      case 'info':
        return 'background: blue; color: white; font-size: x-large'
    }
  }
}

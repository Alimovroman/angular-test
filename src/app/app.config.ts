import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './shared/app.routes'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { CredentialInterceptor } from './core/intercepters/credential.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: CredentialInterceptor, multi: true },
  ],
}

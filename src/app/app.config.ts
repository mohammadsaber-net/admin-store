import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "enabled"
    })),
  provideHttpClient(),
  provideToastr(),
  provideAnimations(),
  ]
};
// provideClientHydration(withEventReplay()),
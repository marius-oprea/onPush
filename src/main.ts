import { ApplicationRef, enableProdMode, importProvidersFrom, NgZone, ɵNoopNgZone } from '@angular/core';
import { bootstrapApplication, enableDebugTools } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: 'lazy',
    loadComponent: () => import('./app/lazy-loaded/lazy-loaded.component').then(c => c.LazyLoadedComponent)
  }
];


bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))]
});

/*
// ENTER the following in Console:  ng.profiler.timeChangeDetection({ record: true })
bootstrapApplication(AppComponent, {  
  providers: [
    { provide: NgZone, useValue: new ɵNoopNgZone() },
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
}).then(applicationRef => {
  if (!environment.production) {
    // Ensure that `ng.profiler` exists.
    enableDebugTools(applicationRef.components[0]);
  }
});
*/
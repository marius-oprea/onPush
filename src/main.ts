import { ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// https://www.youtube.com/watch?v=OcphK_aEd7I&ab_channel=StepanSuvorov
// https://www.youtube.com/watch?v=aDnKmuQWTyE&ab_channel=FrontPro
// https://www.youtube.com/watch?v=-tB-QDrPmuI&ab_channel=MonsterlessonsAcademy


// platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'})
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



  // ENTER the following in Console:  ng.profiler.timeChangeDetection({ record: true })
  import {enableDebugTools} from '@angular/platform-browser';
/*
  platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(moduleRef => {
    if (!environment.production) {
          const applicationRef = moduleRef.injector.get(ApplicationRef);
          const componentRef = applicationRef.components[0];
          // Ensure that `ng.profiler` exists.
          enableDebugTools(componentRef);
    }
  })
  .catch(err => console.error(err));
*/
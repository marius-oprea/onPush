import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// https://www.youtube.com/watch?v=OcphK_aEd7I&ab_channel=StepanSuvorov
// https://www.youtube.com/watch?v=aDnKmuQWTyE&ab_channel=FrontPro
// https://www.youtube.com/watch?v=-tB-QDrPmuI&ab_channel=MonsterlessonsAcademy

platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'})
  .catch(err => console.error(err));

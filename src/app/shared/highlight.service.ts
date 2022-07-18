import { Injectable, NgZone } from "@angular/core";

@Injectable({providedIn:'root'})
export class HightlightService {
  progress = 0;

  constructor(private ngZone: NgZone) {
  }

  run(el: any, className = 'checked') {
    const a = el.nativeElement.querySelector('mat-card');
    this.progress = 0;
    if (a) {
      a.classList.add(className);

      this.ngZone.runOutsideAngular(() => {        
        setTimeout(() => {
          a.classList.remove(className);
        }, 1000);
      });      
    }
  }
}

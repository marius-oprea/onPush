import { Injectable, NgZone } from "@angular/core";

@Injectable({providedIn:'root'})
export class HightlightService {
  progress = 0;

  constructor(private ngZone: NgZone) {
  }

  run(element: any, className = 'checked') {
    const card = element.nativeElement.querySelector('mat-card');
    this.progress = 0;
    if (card) {
      card.classList.add(className);

      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          card.classList.remove(className);
        }, 1000);
      });      
    }
  }
}

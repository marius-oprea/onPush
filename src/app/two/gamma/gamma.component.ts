import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GammaComponent implements AfterViewChecked {
  counter: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.counter = 0;
  }

  onClick() {
  }
  
  ngAfterViewChecked() {    
    this.counter++;
    this.cdr.detectChanges();
  }   
}

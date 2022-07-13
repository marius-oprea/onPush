import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetaComponent implements AfterViewChecked {
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

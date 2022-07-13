import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GammaComponent implements AfterViewChecked {
  @Input() id: number;
  counter: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.id = 0;
    this.counter = 0;
  }

  onClick() {
  }

  onDownCounter() {
    this.counter--;
  }

  onUpCounter() {
    this.counter++;
  }  
  
  ngAfterViewChecked() {    
    //this.counter++;
    console.log('App -> Two -> Gamma');
    // this.cdr.detectChanges();
  }   
}

import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-epsilon',
  templateUrl: './epsilon.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpsilonComponent implements AfterViewChecked {
  @Input() id: number;
  counter: number;
  
  constructor(private cdr: ChangeDetectorRef) {
    this.id = 0;
    this.counter = 0;
    // this.cdr.detach();
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
    console.log('App -> Three -> Epsilon');
    // this.cdr.detectChanges(); 
  }   
}

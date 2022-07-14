import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from 'src/app/shared/highlight';

@Component({
  selector: 'app-epsilon',
  templateUrl: './epsilon.component.html',
  styleUrls: ['./epsilon.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpsilonComponent implements AfterViewChecked {
  @Input() id: number;
  @Input() user: any;
  counter: number;
  
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
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

  renderView() {
    hightlight(this.element);
  }    
  
  ngAfterViewChecked() {    
    //this.counter++;
    console.log('App -> Three -> Epsilon');
    // this.cdr.detectChanges(); 
    // hightlight(this.element);
  }   
}

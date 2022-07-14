import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from 'src/app/shared/highlight';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlphaComponent implements AfterViewChecked {
  @Input() id: number;
  @Input() user: any;
  counter: number;

  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
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

  renderView() {
    hightlight(this.element);
  }  
  
  ngAfterViewChecked() {    
    // this.counter++;
    console.log('App -> One -> Alpha');
    // this.cdr.detectChanges();
    // hightlight(this.element);
  } 
}

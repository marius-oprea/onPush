import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from 'src/app/shared/highlight';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeltaComponent implements AfterViewChecked {
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
    //this.counter++;
    console.log('App - Three -> Delta');
    // this.cdr.detectChanges();
    // hightlight(this.element);
  }     
}

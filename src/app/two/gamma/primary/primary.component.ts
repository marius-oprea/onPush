import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from 'src/app/shared/highlight';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryComponent implements AfterViewChecked {
  @Input() id: number;
  @Input() user: any;
  @Input() value: any;
  counter: number;

  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
    this.id = 0;
    this.counter = 0;
  }
 
/*
  getValue() {
    console.log('getValue');
    return this.value;
  }
*/  

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
    console.log('App -> Two -> Gamma -> Primary');
    // this.cdr.detectChanges(); 
    // hightlight(this.element);
  } 
}

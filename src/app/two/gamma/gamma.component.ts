import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { hightlight } from 'src/app/shared/highlight';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GammaComponent implements AfterViewChecked {
  @Input() id: number;
  @Input() user: any;
  counter: number;
  idPrimary: number;
  userPrimary = {
    firstName: 'John',
    lastName: 'Doe'
  };    


  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
    this.idPrimary = 0;
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

  onGeneratePrimaryId() {
    this.idPrimary = Math.floor(Math.random() * 100);
  }

  renderView() {
    hightlight(this.element);
  }  
  
  ngAfterViewChecked() {    
    //this.counter++;
    console.log('App -> Two -> Gamma');
    // this.cdr.detectChanges();
    // hightlight(this.element);
  }   
}

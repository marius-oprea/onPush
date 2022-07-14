import { AfterViewChecked, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { hightlight } from '../shared/highlight';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent implements OnChanges, DoCheck {
  @Input() id: number;
  @Input() user: any;
  @Input() observable: any;
  @Input() department: string;
  oldName: string;
  counter: number;
  idAlpha: number;
  idBeta: number;
  userAlpha = {
    firstName: 'John',
    lastName: 'Doe'
  };
  userBeta = {
    firstName: 'John',
    lastName: 'Doe'
  };  
  
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
    this.idAlpha = 0;
    this.idBeta = 0;
    this.counter = 0;
    this.id = 0;
    this.oldName = '';
    this.department = '';
  }

  onClick() {
  }

  onGenerateId(): number {
    return Math.floor(Math.random() * 100);
  }

  onGenerateAlphaId() {
    this.idAlpha = this.onGenerateId();
  }

  onGenerateBetaId() {
    this.idBeta = this.onGenerateId();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App -> One - ngOnChanges', this.user)
  }

  ngDoCheck() {
    console.log('App -> One - ngDoCheck', this.user)
    //this.cdr.markForCheck();
    // this.cdr.detectChanges();
  }

  detectChanges() {
    this.cdr.detectChanges();
  }

  markForCheck() {
    this.cdr.markForCheck();    
  }

  checkNoChanges() {
    // USE IT ONLY IN DEVELOPMENT MODE
    this.cdr.checkNoChanges();
  }

  detach() {
    this.cdr.detach();
  }

  reattach() {
    this.cdr.reattach();
  }

  renderView() {
    console.log('App -> One');
    hightlight(this.element);
  }
}

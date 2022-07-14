import { AfterViewChecked, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { hightlight } from '../shared/highlight';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent implements AfterViewChecked, OnChanges, DoCheck /*implements OnChanges, DoCheck, OnInit*/ {
  @Input() id: number;
  @Input() user: any;
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

    //this.cdr.detach();
    // this.cdr.checkNoChanges();
  }

  /*
    Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
  */
 /*
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.id);
    console.log('ngOnChanges', this.user);
    console.log('ngOnChanges', this.department);
    // this.cdr.reattach();
  }
*/
  /*
    Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
    Detect and act upon changes that Angular can't or won't detect on its own. See details and example in Defining custom change detection in this document.
  */
 /*
  ngDoCheck(): void {
    if (this.oldName === '') {
      console.log('ngDoCheck', this.id);
      console.log('ngDoCheck', this.user);
      console.log('ngDoCheck', this.department);
    
      this.oldName = this.user.firstName;      
    } else {
      if (this.oldName !== this.user.firstName) {
        console.log('ngDoCheck', this.id);
        console.log('ngDoCheck', this.user);  

        // this.cdr.markForCheck();
        // this.cdr.detectChanges();
        // this.cdr.detach();
        // this.cdr.reattach();
        this.oldName = this.user.firstName;
      }
    }       
  }
*/
/*
  markForCheck() {
    this.cdr.markForCheck();
  }

  detectChanges() {
    this.cdr.detectChanges();
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  getId() {
    console.log('getID');
    return this.id;
  }

  getUser() {
    console.log('getUser');
    return this.user;
  }

  getDepartment() {
    console.log('getDepartment');
    return this.department;
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
    console.log(this.user)
  }

  ngDoCheck() {
    // console.log(this.user)
    //this.cdr.markForCheck();
    //this.cdr.detectChanges();
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
    hightlight(this.element);
  }

  ngAfterViewChecked() {
    // this.counter++;
    console.log('App -> One');
    
    // this.cdr.detectChanges();
    // this.cdr.markForCheck();
  }   
}
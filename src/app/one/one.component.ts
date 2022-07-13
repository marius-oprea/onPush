import { AfterViewChecked, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent implements AfterViewChecked /*implements OnChanges, DoCheck, OnInit*/ {
  @Input() id: number;
  @Input() user: any;
  @Input() department: string;
  oldName: string;
  counter: number;
  idAlpha: number;
  idBeta: number;
  
  constructor(private cdr: ChangeDetectorRef) {
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

  ngAfterViewChecked() {
    // this.counter++;
    console.log('App -> One');
    // this.cdr.detectChanges();
  }  
}

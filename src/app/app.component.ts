import { AfterContentChecked, AfterViewChecked, AfterViewInit, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewChecked {
  counter: number;
  id = 5;
  user = {
    firstName: 'John',
    lastName: 'Doe'
  };
  department = 'IT';
  obj = {
    a: 1,
    b: 2,
    c: 3
  };
  value = 'third component';

  idOne = 1;
  idTwo = 2;
  idThree = 3;

  constructor(private appRef: ApplicationRef, private cdr: ChangeDetectorRef) {
    //this.cdr.detach();
    this.counter = 0;
  }

  onClickId() {
    this.id++;
  }

  onDownCounter() {
    this.counter--;
  }

  onUpCounter() {
    this.counter++;
  }  

  onClickName() {
    this.user.firstName = 'June';    
/*
    this.user = {
      firstName: 'June',
      lastName: 'Doe'
    };
*/
  }
/*
  onClickDepartment() {
    this.department = 'HR';
  }

  onClickObj() {
    this.obj.b = 22;
  }

  onClickValue() {
    this.value = 'fourth component';
  }

  onUpdate() {
    this.appRef.tick();
    // setTimeout(() => {});
  }
*/

  onClick() {    
  }

  onGenerateId(): number {
    return Math.floor(Math.random() * 100);
  }

  onGenerateOneId() {
    this.idOne = this.onGenerateId();
  }

  onGenerateTwoId() {
    this.idTwo = this.onGenerateId();
  }

  onGenerateThreeId() {
    this.idThree = this.onGenerateId();
  }  

  ngAfterViewChecked() {
    // this.counter++;
    console.log('App');
   // this.cdr.detectChanges();
  }  
}

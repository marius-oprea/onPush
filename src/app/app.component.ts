import { AfterContentChecked, AfterViewChecked, AfterViewInit, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { hightlight } from './shared/highlight';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewChecked {
  counter: number;
  id = 5;
  userOne = {
    firstName: 'John',
    lastName: 'Doe'
  };
  userTwo = {
    firstName: 'John',
    lastName: 'Doe'
  };
  userThree = {
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

  constructor(private appRef: ApplicationRef, private cdr: ChangeDetectorRef, private element: ElementRef) {
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
    this.userOne.firstName = 'June';    
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

  onChangeUserOne() {
    this.userOne.firstName = 'Adam';
    /*
    this.userOne = {
      firstName: 'Adam',
      lastName: 'Doe'
    };
    */
  }

  onChangeUserTwo() {
    this.userTwo.firstName = 'Adam';
  }

  onChangeUserThree() {
    this.userThree.firstName = 'Adam';
  }

  detectChanges() {
    this.appRef.tick();
  }

  renderView() {
    hightlight(this.element);
  }  

  ngAfterViewChecked() {
    // this.counter++;
    console.log('App');
    // this.element.nativeElement.style.backgroundColor = 'red';
    // hightlight(this.element);
    console.log(this.element.nativeElement)
   // this.cdr.detectChanges();
  }
 
}

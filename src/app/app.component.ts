import { AfterContentChecked, AfterViewChecked, AfterViewInit, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
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

  constructor(private appRef: ApplicationRef, private cdr: ChangeDetectorRef) {
    //this.cdr.detach();
    this.counter = 0;
  }

  onClickId() {
    this.id++;
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
    // this.counter++;
  }


  ngAfterViewChecked() {
   this.counter++;
   this.cdr.detectChanges();
  }  
}

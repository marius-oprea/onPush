import { ApplicationRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  constructor(private appRef: ApplicationRef) {
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
}

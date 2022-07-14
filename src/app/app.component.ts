import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { hightlight } from './shared/highlight';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  observable$: Subject<any>;
  observableSource: string[];
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
    this.counter = 0;
    this.observableSource = ['a', 'b', 'c'];
    this.observable$ = new BehaviorSubject(this.observableSource);
  }

  onClickId() {
    this.id++;
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

  onChangeObservable() {
    this.observableSource = ['g'];
    this.observable$.next(this.observableSource);
  }

  detectChanges() {
    this.appRef.tick();
  }

  renderView() {
    console.log('App');
    hightlight(this.element);
  }  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App - ngOnChanges');
  }

  ngOnInit(): void {
    console.log('App - ngOnInit');
  }

  ngDoCheck(): void {
    console.log('App - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('App - ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('App - ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('App - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('App - ngAfterViewChecked');
  }
 
}

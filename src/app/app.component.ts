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
  counter: number;
  constructor(private appRef: ApplicationRef, private cdr: ChangeDetectorRef, private element: ElementRef) {
    this.counter = 0;
  }

  onClick() {    
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

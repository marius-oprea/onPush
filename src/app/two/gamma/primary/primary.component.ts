import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { hightlight } from 'src/app/shared/highlight';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor(private cdr: ChangeDetectorRef, private element: ElementRef) {
  }
 
  onClick() {
  }

  renderView() {
    console.log('App -> Two -> Gamma -> Primary');
    hightlight(this.element);
  } 

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App -> Two -> Gamma -> Primary - ngOnChanges');
  }

  ngOnInit(): void {
    console.log('App -> Two -> Gamma -> Primary - ngOnInit');
  }

  ngDoCheck(): void {
    console.log('App -> Two -> Gamma -> Primary - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('App -> Two -> Gamma -> Primary - ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('App -> Two -> Gamma -> Primary - ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('App -> Two -> Gamma -> Primary - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('App -> Two -> Gamma -> Primary - ngAfterViewChecked');
  }  
}

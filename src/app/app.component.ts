import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, 
  AfterViewInit, 
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges 
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { OneComponent } from './one/one.component';
import { HightlightService } from './shared/highlight.service';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    // BrowserModule,
    RouterModule,
    CommonModule,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    
    MatButtonModule,
    // BrowserAnimationsModule,
    MatCardModule
    
  ],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor(private appRef: ApplicationRef, private cdr: ChangeDetectorRef, private element: ElementRef, private highlightService: HightlightService) {
  }

  onClick() {    
  }

  onTick() {
    this.appRef.tick();
  }

  renderView() {
    console.log('App');
    this.highlightService.run(this.element);
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

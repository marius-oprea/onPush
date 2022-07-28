import { CommonModule } from '@angular/common';
import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges 
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HightlightService } from 'src/app/shared/highlight.service';
import { memoize } from '../../../shared/memoize.decorator';

@Component({
  standalone: true,
  selector: 'app-primary',
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() id: number
  @Input() user: any;
  @Input() observable: any;

  constructor(private cdr: ChangeDetectorRef, private element: ElementRef, private highlightService: HightlightService) {
    this.id = 0;
  }
 
  onClick() {
  }

  //@memoize()
  getTitle(title: string) {
    console.log('getTitle is called');
    return title;
  }

  renderView() {
    console.log('App -> Two -> Gamma -> Primary');
    this.highlightService.run(this.element);
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App -> Two -> Gamma -> Primary - ngOnChanges');
  }

  ngOnInit(): void {
    console.log('App -> Two -> Gamma -> Primary - ngOnInit');
  }

  ngDoCheck(): void {
    console.log('App -> Two -> Gamma -> Primary - ngDoCheck');
    // this.cdr.markForCheck();
    // this.cdr.detectChamges();
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

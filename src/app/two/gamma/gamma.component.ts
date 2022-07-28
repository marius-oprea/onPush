import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BehaviorSubject, Subject } from 'rxjs';
import { HightlightService } from 'src/app/shared/highlight.service';
import { PrimaryComponent } from './primary/primary.component';

@Component({
  standalone: true,
  selector: 'app-gamma',
  imports: [
    CommonModule,
    PrimaryComponent,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GammaComponent {
  @Input() id: number;
  @Input() user: any;
  observable$: Subject<any>;
  observableSource: string[];
  userOne = {
    firstName: 'John',
    lastName: 'Doe'
  };

  counter: number;
  idPrimary: number;
  userPrimary = {
    firstName: 'John',
    lastName: 'Doe'
  };    

  constructor(private cdr: ChangeDetectorRef, private element: ElementRef, private highlightService: HightlightService) {
    this.observableSource = ['a', 'b', 'c'];
    this.observable$ = new BehaviorSubject(this.observableSource);

    this.idPrimary = 0;
    this.id = 0;
    this.counter = 0;
  }

  onChangeUser() {
    this.userOne.firstName = 'Adam';
    /*
    this.userOne = {
      firstName: 'Adam',
      lastName: 'Doe'
    };
    */
  }

  onClick() {
  }

  onGenerateId() {
    this.idPrimary = Math.floor(Math.random() * 100);
  }

  onChangeObservable() {
    this.observableSource = ['g'];
    this.observable$.next(this.observableSource);
  }

  renderView() {
    console.log('App -> Two -> Gamma');
    this.highlightService.run(this.element);
  }  
}

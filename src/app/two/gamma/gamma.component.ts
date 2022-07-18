import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HightlightService } from 'src/app/shared/highlight.service';

@Component({
  selector: 'app-gamma',
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

  onGenerateId(): number {
    return Math.floor(Math.random() * 100);
  }

  onGenerateOneId() {
    this.idPrimary = this.onGenerateId();
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

  onClick() {
  }

  onGeneratePrimaryId() {
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

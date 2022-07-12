import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html'
})
export class ParentTwoComponent {
  @Input() obj: any;

  getObj() {
    console.log('getObj');
    return this.obj;
  }
}

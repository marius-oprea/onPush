import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-three',
  templateUrl: './parent-three.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentThreeComponent {
  @Input() value: any;

  getValue() {
    console.log('getValue');
    return this.value;
  }
}

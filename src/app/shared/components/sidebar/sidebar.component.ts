import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent { }

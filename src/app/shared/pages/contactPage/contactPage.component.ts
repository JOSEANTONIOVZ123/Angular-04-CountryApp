import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'shared-contact-page',
  templateUrl: 'contactPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent { }

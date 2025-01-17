import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'shared-about-page',
  templateUrl: './aboutPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent { }

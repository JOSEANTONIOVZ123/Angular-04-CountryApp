import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'shared-home-page',
  templateUrl: './homePage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }

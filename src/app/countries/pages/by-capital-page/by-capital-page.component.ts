import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-by-capital-page',
  standalone: false,

  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {



  searchByCapital( term: string ):void {
      console.log('Desde ByCapitalPage');
      console.log({ term });
  }

}

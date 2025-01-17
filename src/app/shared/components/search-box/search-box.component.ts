import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Output() onValue = new EventEmitter<string>();
  placeholder: string | undefined;

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onValue.emit(input.value);
  }
}

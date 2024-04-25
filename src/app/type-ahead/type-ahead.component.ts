import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-type-ahead',
  standalone: true,
  imports: [],
  templateUrl: './type-ahead.component.html'
})
export class TypeAheadComponent {
  @Output() searchKeyword: EventEmitter<string> = new EventEmitter<string>();

  onSearch(value: string) {
    this.searchKeyword.emit(value);
  }
}

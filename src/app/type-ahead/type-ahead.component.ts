import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-type-ahead',
  standalone: true,
  imports: [],
  templateUrl: './type-ahead.component.html',
  styleUrl: './type-ahead.component.css'
})
export class TypeAheadComponent {
  @Input() isLoading = false;
  @Output() searchKeyword: EventEmitter<string> = new EventEmitter<string>();

  onSearch(value: string) {
    this.searchKeyword.emit(value);
  }
}

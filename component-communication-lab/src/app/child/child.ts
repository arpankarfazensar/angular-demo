import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrls: ['./child.css']
})
export class Child {

  @Input() name!: string;
  @Input() id!: number;

  @Output() studentSelected = new EventEmitter<string>();

  selectStudent() {
    this.studentSelected.emit(this.name);
  }
}
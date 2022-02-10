import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() type: String;
  @Input() modelInput: any;
  @Input() valueInput: String;

  @Output() emitChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeInput (e) {
    this.emitChange.emit(e.target.value);
  }

}

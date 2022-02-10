import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() type: String;
  @Input() text: String;
  @Input() buttonType: String;
  @Output() click = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitClick () {
    this.click.emit();
  }

}

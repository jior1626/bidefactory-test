import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

	@Input() value: String;

	@Input() id: String;

	@Input() checked: Boolean;

	@Output() onChange = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	onChangeCheckbox(e) {
		return this.onChange.emit(e.target.checked);
	}

}

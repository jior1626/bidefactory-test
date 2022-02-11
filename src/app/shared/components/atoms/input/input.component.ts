import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

	@Input() type: String;

	@Input() modelInput: any;

	@Input() value: String;

	@Input() placeholder: String;

	@Output() changeValue = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	changeInput(e) {
		this.changeValue.emit(e.target.value);
	}

}

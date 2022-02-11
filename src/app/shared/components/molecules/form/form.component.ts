import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonAdd } from 'src/app/config/buttons';
import { InputText } from 'src/app/config/inputs';
import { All } from 'src/app/models/all/all.model';
import { AllService } from 'src/app/shared/services/all/all.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	buttonSave = ButtonAdd;

	inputText = InputText;

	@Output() saveData = new EventEmitter();

	constructor(
		private allService: AllService
	) { }

	ngOnInit() {
	}

	changeValueInput (value) {
		this.inputText.valueInput = value;
	}

 	async saveAll () {

		let data: All = {
			title: this.inputText.valueInput,
			userId: 1,
			body: '',
			completed: false
		};

		// Guardar en la data que esta en cache
		await this.saveData.emit(data);

		// Guardar en el servicio consumiendo el API
		// let response = this.allService.saveAll(data).then(response => response);
		// console.log("response:", response);

		// Clear Input
		this.inputText.valueInput = "";
	}

}

import { Component, Input, OnInit } from '@angular/core';
import { ButtonDelete } from 'src/app/config/buttons';
import { All } from 'src/app/models/all/all.model';
import { AllService } from 'src/app/shared/services/all/all.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	// Información de nuevo item que se agrego en el formulario para actualizar la lista.
	@Input()
	set newItem(data: All) {
		if (data != undefined && data != null) {
			this.addItem(data);
		}
		data = null;
	}

	list: All[];

	buttonDelete = ButtonDelete

	constructor(private serviceAll: AllService) { }

	ngOnInit() {
		this.getAll();
	}

	// Obtener todo los datos del API solo una vez cuando se carga la pagina
	getAll = async () => {
		this.list = await this.serviceAll.getAll().then(data => data);
	}

	// Agregar item a la data que esta en cache
	addItem (data: All) {
		this.list = [...this.list, data];
		console.log("new data:", this.list);
	}

	// Cambiar el estado del item
	changeValueCheckbox(status, index) {
		this.list[index] = {
			...this.list[index],
			completed: status
		};
		console.log("Change status item:", status);
	}

	deleteItem (index) {
		this.list.splice(index, 1);
	}

}

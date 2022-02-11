import { Component, OnInit } from '@angular/core';
import { All } from 'src/app/models/all/all.model';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	newItem: All = null;

	constructor() { }

	ngOnInit() {
	}

	submitForm(data: All) {
		console.log("submit form", data);
		this.newItem = data;
	}

}

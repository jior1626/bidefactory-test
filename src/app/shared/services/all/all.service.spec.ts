/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { All } from 'src/app/models/all/all.model';
import { AllService } from './all.service';

describe('Service: All', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
			providers: [AllService]
		});
	});

	it('should ...', inject([AllService], (service: AllService) => {
		expect(service).toBeTruthy();
	}));

	it('Get All', inject([AllService], async (service: AllService) => {
		let req = await service.getAll().then(response => response);
		expect(req).toBeTruthy();
	}));

	it('Save All', inject([AllService], async (service: AllService) => {
		let data: All = {
			title: "example test title",
			body: "example test body",
			userId: 1,
			completed: false
		} 
		let req = await service.saveAll(data).then(response => response);
		expect(req).toBeTruthy();
	}));

	it('Update All By Id', inject([AllService], async (service: AllService) => {
		let data: All = {
			id: 1,
			title: "example test title",
			body: "example test body",
			userId: 1,
			completed: false,
		} 
		let req = await service.updateAllById(data).then(response => response);
		expect(req).toBeTruthy();
	}));

	it('Delele All By Id', inject([AllService], async (service: AllService) => {
		let id = 1;
		let req = await service.deleteById(id).then(response => response);
		expect(req).toBeTruthy();
	}));
});

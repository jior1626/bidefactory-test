import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP } from '../../../config/constants';
import { All } from 'src/app/models/all/all.model';

@Injectable({
	providedIn: 'root'
})
export class AllService {

	apiEndpoint = APP.ApiUrl;

	constructor(
		private http: HttpClient
	) { }

	public getAll() {
		return this.http.get<All[]>(`${this.apiEndpoint}/todos`).toPromise();
	}

	public saveAll(data: All){
		return this.http.post<All>(
			`${this.apiEndpoint}/todos`, 
			data,
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				}
			}
		).toPromise();
	}

	public updateAllById(data: All){
		return this.http.put<All>(
			`${this.apiEndpoint}/todos/${data.id}`, 
			data,
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				}
			}
		).toPromise();
	}

	public deleteById(id){
		return this.http.delete(`${this.apiEndpoint}/todos/${id}`).toPromise();
	}

}

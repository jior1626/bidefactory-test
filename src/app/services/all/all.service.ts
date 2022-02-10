import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP } from './../../config/constants';
import { All } from 'src/app/models/all/all.model';

@Injectable({
	providedIn: 'root'
})
export class AllService {

	apiEndpoint = APP.ApiUrl;

	constructor(
		private http: HttpClient
	) { }

	public async getAll() {
		return await this.http.get<All[]>(`${this.apiEndpoint}/todos`);
	}

	public async saveAll(data: All){
		return await this.http.post<All>(
			`${this.apiEndpoint}/todos`, 
			data,
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				}
			}
		);
	}

	public async updateAllById(data: All){
		return await this.http.post<All>(
			`${this.apiEndpoint}/todos/${data.id}`, 
			data,
			{
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				}
			}
		);
	}

	public async deleteById(id){
		return await this.http.delete(`${this.apiEndpoint}/todos/${id}`);
	}

}

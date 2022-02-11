/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { FormComponent } from './form.component';
import { HttpClientModule } from '@angular/common/http';

describe('FormComponent', () => {
	let component: FormComponent;
	let fixture: ComponentFixture<FormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
			imports: [HttpClientModule],
			declarations: [FormComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(FormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('Ver si contiene el componente atomico de input', async(() => {
		const el = fixture.nativeElement.querySelector('app-input');
		expect(el).toBeTruthy();
	}));

	it('Ver si contiene el componente atomico de button', async(() => {
		const el = fixture.nativeElement.querySelector('app-button');
		expect(el).toBeTruthy();
	}));
});

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/atoms/button/button.component';
import { CheckboxComponent } from './components/atoms/checkbox/checkbox.component';
import { InputComponent } from './components/atoms/input/input.component';
import { FormComponent } from './components/molecules/form/form.component';
import { ListComponent } from './components/molecules/list/list.component';
import { AllService } from './services/all/all.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
	],
	declarations: [
		// Atoms
		ButtonComponent,
		CheckboxComponent,
		InputComponent,
		// Molecules
		FormComponent,
		ListComponent
	],
	exports: [
		HttpClientModule,
		// Atoms
		ButtonComponent,
		CheckboxComponent,
		InputComponent,
		// Molecules
		FormComponent,
		ListComponent
	],
	providers: [
		AllService
	]
})
export class SharedModule { }

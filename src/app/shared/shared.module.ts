import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/atoms/button/button.component';
import { CheckboxComponent } from './components/atoms/checkbox/checkbox.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { InputComponent } from './components/atoms/input/input.component';
import { FormComponent } from './components/molecules/form/form.component';
import { ListComponent } from './components/molecules/list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // Atoms
    ButtonComponent,
    CheckboxComponent,
    IconComponent,
    InputComponent,
    // Molecules
    FormComponent,
    ListComponent
  ],
  exports: [
    // Atoms
    ButtonComponent,
    CheckboxComponent,
    IconComponent,
    InputComponent,
    // Molecules
    FormComponent,
    ListComponent
  ]
})
export class SharedModule { }

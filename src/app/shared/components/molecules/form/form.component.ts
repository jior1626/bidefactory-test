import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  inputType = "text"
  buttonType = "danger";
  text = "Add";
  type = "button"

  constructor() { }

  ngOnInit() {
  }

}

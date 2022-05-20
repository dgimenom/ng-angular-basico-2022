import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css'],
})
export class CreateServerComponent implements OnInit {
  @Output() cancel = new EventEmitter<boolean>();

  instanceTypeOptions = ['large', 'medium', 'small'];

  createServerForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.createServerForm = new FormGroup({
      name: new FormControl(null),
      id: new FormControl(null),
      status: new FormControl('Online'),
      instanceType: new FormControl('small'),
    });
  }

  onCancel() {
    this.cancel.emit(true);
  }

  onSubmit() {
    console.log('FORM:', this.createServerForm);
  }

  onDebug() {
    console.clear();
    console.log('Form', this.createServerForm);
    console.group('form');
    console.log('.value', this.createServerForm.value);
    console.log('.touched', this.createServerForm.touched);
    console.log('.valid', this.createServerForm.valid);
    console.log('.errors', this.createServerForm.errors);
    console.groupEnd();

    console.group('control name');
    console.log('.touched', this.createServerForm.controls.name.touched);
    console.log('.dirty', this.createServerForm.controls.name.dirty);
    console.log('.valid', this.createServerForm.controls.name.valid);
    console.log('.errors', this.createServerForm.controls.name.errors);
    console.groupEnd();

    console.group('control id');
    console.log('.touched', this.createServerForm.controls.id.touched);
    console.log('.dirty', this.createServerForm.controls.id.dirty);
    console.log('.valid', this.createServerForm.controls.id.valid);
    console.log('.errors', this.createServerForm.controls.id.errors);
    console.groupEnd();
  }
}

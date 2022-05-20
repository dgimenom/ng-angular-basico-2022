import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Server } from '../server.model';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css'],
})
export class CreateServerComponent implements OnInit {
  @Output() cancel = new EventEmitter<boolean>();
  @Output() submit = new EventEmitter<Server>();

  instanceTypeOptions = ['large', 'medium', 'small'];
  statusServerOptions = ['stable', 'initializing', 'failed'];
  positiveNumberPattern = /^\d*[1-9]\d*$/;
  maxLengthAllowed = 50;

  forbiddenServerNames = ['Test', 'Server'];

  createServerForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.createServerForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(this.maxLengthAllowed),
        this.forbiddenNames.bind(this),
      ]),
      id: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.positiveNumberPattern),
      ]),
      status: new FormControl('stable', Validators.required),
      instanceType: new FormControl('small'),
    });

    //Podemos actualizar el valor del formControl llamando a setValue
    // this.name.setValue('Test Server');

    //Podemos actualizar los valores de los validadores llamando a setValidators
    // this.name.setValidators([Validators.required]);

    //Podemos suscribirnos a los cambios de los valores del form
    this.createServerForm.valueChanges.subscribe((value) => {
      console.log('form value changed', value);
    });
  }

  get name(): FormControl {
    return this.createServerForm.get('name') as FormControl;
  }
  get id(): FormControl {
    return this.createServerForm.controls.id as FormControl;
  }
  get status(): FormControl {
    return this.createServerForm.controls['status'] as FormControl;
  }
  get instanceType(): FormControl {
    return this.createServerForm.get('instanceType') as FormControl;
  }

  onCancel() {
    this.cancel.emit(true);
  }

  onSubmit() {
    if (this.createServerForm.valid) {
      const newServerCreated = new Server(
        this.name.value,
        this.id.value,
        this.status.value,
        this.instanceType.value
      );
      this.submit.emit(newServerCreated);
      this.onCancel();
    } else {
      this.createServerForm.markAllAsTouched();
    }
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

  forbiddenNames(control: FormControl): ValidationErrors | null {
    if (this.forbiddenServerNames.includes(control.value)) {
      return { nameIsForbidden: true };
    }
    return null;
  }
}

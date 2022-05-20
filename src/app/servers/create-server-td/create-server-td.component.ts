import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-server-td',
  templateUrl: './create-server-td.component.html',
  styleUrls: ['./create-server-td.component.css'],
})
export class CreateServerTdComponent implements OnInit {
  @Output() cancel = new EventEmitter<boolean>();

  instanceTypeOptions = ['large', 'medium', 'small'];

  constructor() {}

  ngOnInit(): void {}

  onCancel() {
    this.cancel.emit(true);
  }

  onSubmit(form: NgForm) {
    console.log('submitted!!', form.value);
  }
}

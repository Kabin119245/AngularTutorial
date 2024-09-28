import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  studentForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    isAcceptTerms: new FormControl(),
  });

  formValue: any;

  onSave() {
    this.formValue = this.studentForm.value;
  }
}

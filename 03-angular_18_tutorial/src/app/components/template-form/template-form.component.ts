import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  user: any = {
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    isAcceptTerms: false,
  };

  userSubmitted: any = '';

  onSubmit() {
    debugger;
    this.userSubmitted = this.user;
  }
}

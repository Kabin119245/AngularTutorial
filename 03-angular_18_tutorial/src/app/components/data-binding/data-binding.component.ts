import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  //string, number, boolean, date

  courseName: string = 'Angular 18';

  inputType = 'checkbox';

  rollNo: number = 20;

  isNepali: boolean = true;

  currentDate: Date = new Date();

  myClassName: string = 'bg-danger';
}

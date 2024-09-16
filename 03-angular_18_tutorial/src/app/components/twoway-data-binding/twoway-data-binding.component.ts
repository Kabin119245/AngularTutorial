import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twoway-data-binding.component.html',
  styleUrl: './twoway-data-binding.component.css',
})
export class TwowayDataBindingComponent {
  myName: string = 'Kabin Giri';

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  addNumbers() {
    this.result = this.num1 + this.num2;
  }
}

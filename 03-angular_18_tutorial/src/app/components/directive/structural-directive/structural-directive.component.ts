import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css',
})
export class StructuralDirectiveComponent {
  isDiv1enabled: boolean = true;

  isDiv2enabled: boolean = true;

  num1: string = '';
  num2: string = '';

  showDiv1() {
    this.isDiv1enabled = true;
  }

  hideDiv1() {
    this.isDiv1enabled = false;
  }

  toggleDiv2() {
    // if (this.isDiv2enabled) {
    //   this.isDiv2enabled = false;
    // } else {
    //   this.isDiv2enabled = true;
    // }

    this.isDiv2enabled = !this.isDiv2enabled;
  }
}

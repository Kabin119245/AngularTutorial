import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css',
})
export class StructuralDirectiveComponent {
  isDiv1enabled: boolean = true;

  isDiv2enabled: boolean = true;

  cityArray: string[] = [
    'Kathmandu',
    'Pokhara',
    'Lumbini',
    'Dolakha',
    'Dhankuta',
  ];

  studentList: any[] = [
    { studId: 1, name: 'Kabin', city: 'Kathmandu', isActive: true },
    { studId: 2, name: 'Kabina', city: 'Kathmandu', isActive: false },
    { studId: 3, name: 'Kanchan', city: 'Dhankuta', isActive: true },
    { studId: 4, name: 'Kaluram', city: 'Doha', isActive: false },
    { studId: 5, name: 'Laxmi', city: 'Dhankuta', isActive: false },
  ];

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

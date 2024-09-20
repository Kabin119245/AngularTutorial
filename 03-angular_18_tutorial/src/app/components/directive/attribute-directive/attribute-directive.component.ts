import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  num1: string = '';
  num2: string = '';

  constructor(private router: Router) {}

  studentList: any[] = [
    {
      studId: 1,
      gender: 'Male',
      name: 'Kabin',
      totalMarks: 64,
      city: 'Kathmandu',
      isActive: true,
    },
    {
      studId: 2,
      gender: 'feMale',
      name: 'Kabina',
      totalMarks: 55,
      city: 'Kathmandu',
      isActive: false,
    },
    {
      studId: 3,
      gender: 'feMale',
      name: 'Kanchan',
      totalMarks: 82,
      city: 'Dhankuta',
      isActive: true,
    },
    {
      studId: 4,
      gender: 'Male',
      name: 'Kaluram',
      totalMarks: 89,
      city: 'Doha',
      isActive: false,
    },
    {
      studId: 5,
      gender: 'feMale',
      totalMarks: 45,
      name: 'Laxmi',
      city: 'Dhankuta',
      isActive: false,
    },
  ];

  div1BgColor: string = 'bg-danger';

  isDiv2Active: boolean = false;

  addRed() {
    this.div1BgColor = 'bg-danger';
  }

  addBlue() {
    this.div1BgColor = 'bg-primary';
  }

  toggleDiv2Class() {
    this.isDiv2Active = !this.isDiv2Active;
  }

  navigateToStructural() {
    this.router.navigateByUrl('structural-dir');
  }
}

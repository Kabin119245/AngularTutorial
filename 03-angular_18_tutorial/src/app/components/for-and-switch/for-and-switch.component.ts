import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-and-switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for-and-switch.component.html',
  styleUrl: './for-and-switch.component.css',
})
export class ForAndSwitchComponent {
  dayNumber: string = '';

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
}

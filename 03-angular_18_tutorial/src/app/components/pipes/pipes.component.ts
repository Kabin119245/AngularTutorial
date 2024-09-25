import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, map } from 'rxjs';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  firstName: string = 'angular';

  myName: string = 'My name is Kabin giri.';

  lastName: string = 'KABIN GIRI';

  currentTime: Observable<Date> = new Observable<Date>();

  currentDate: Date = new Date();

  student: any = {
    name: 'Kabin',
    city: 'Kathmandu',
    sId: 13,
  };

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
}

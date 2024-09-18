import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
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
}

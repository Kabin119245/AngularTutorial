import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  div1Visible: boolean = true;

  isWarningDivVisible: boolean = true;

  num1: string = '';
  num2: string = '';

  selectedStatus: string = '';

  hideDiv1() {
    this.div1Visible = false;
  }

  showDiv1() {
    this.div1Visible = true;
  }

  toggleDiv2() {
    this.isWarningDivVisible = !this.isWarningDivVisible;
  }
}

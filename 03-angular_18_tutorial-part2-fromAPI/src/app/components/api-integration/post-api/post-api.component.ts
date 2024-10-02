import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, AlertComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent {
  departmentObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  http = inject(HttpClient);

  onSave() {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
        this.departmentObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Department created successfully');
        } else {
          alert(res.message);
        }
      });
  }
}

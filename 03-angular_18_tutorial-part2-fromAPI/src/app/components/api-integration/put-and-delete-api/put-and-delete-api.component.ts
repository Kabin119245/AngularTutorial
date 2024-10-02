import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-put-and-delete-api',
  standalone: true,
  imports: [FormsModule, JsonPipe, AlertComponent],
  templateUrl: './put-and-delete-api.component.html',
  styleUrl: './put-and-delete-api.component.css',
})
export class PutAndDeleteApiComponent implements OnInit {
  deptObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  //now need to inject object of department service

  private deptSrv = inject(DepartmentService);

  deptList: any[] = [];

  ngOnInit(): void {
    this.getDepartment();
  }

  http = inject(HttpClient);

  onSave() {
    // this.http
    //   .post(
    //     'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
    //     this.deptObj
    //   )
    this.deptSrv.saveNewDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert('Department created successfully');
        this.getDepartment();
      } else {
        alert(res.message);
      }
    });
  }

  onUpdate() {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
        this.deptObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Department Updated successfully');
          this.getDepartment();
        } else {
          alert(res.message);
        }
      });
  }

  onEdit(data: any) {
    this.deptObj = data;
  }

  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to delete?');

    if (isDelete) {
      this.http
        .delete(
          'https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' +
            id
        )
        .subscribe((res: any) => {
          if (res.result) {
            alert('Department Deleted successfully');
            this.getDepartment();
          } else {
            alert(res.message);
          }
        });
    }
  }

  // getDepartment() {
  //   this.http
  //     .get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
  //     .subscribe((res: any) => {
  //       this.deptList = res.data;
  //     });
  // }

  getDepartment() {
    this.deptSrv.getAllDept().subscribe((res: any) => {
      this.deptList = res.data;
    });
  }
}

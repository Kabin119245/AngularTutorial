import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [RouterLink, JsonPipe, AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  userUrl: string = 'https://jsonplaceholder.typicode.com/users';

  customerUrl: string =
    'https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers';

  loading: boolean = false;

  userList: any[] = [];
  customerList: any[] = [];
  //we have to create object of HttpClient
  //two ways
  // http = inject(HttpClient) --> angular 16

  //dependency injection
  constructor(private http: HttpClient) {}

  // Call getAllUser when the component initializes
  // ngOnInit(): void {
  //   this.getAllUsers(); // Automatically call this when the page loads
  // }

  //here we are directly getting the array
  getAllUsers() {
    this.loading = true;
    this.http.get(this.userUrl).subscribe((result: any) => {
      this.userList = result;
      this.loading = false;
    });
  }

  //here we get the object , so we use obj.key
  getAllCustomers() {
    this.loading = true;
    this.http.get(this.customerUrl).subscribe((result: any) => {
      this.customerList = result.data;
      this.loading = false;
    });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar;

  onSelectUser() {}
}

// export class UserComponent {
//   //option-1
//   //selectedUser = DUMMY_USERS[randomIndex];
//   //option-2 using signal
//  // selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(
//     () => '../../assets/users/' + this.selectedUser().avatar
//   );

//   // get imagePath() {
//   //   return '../../assets/users/' + this.selectedUser.avatar;
//   // }
//   //we dont use getter in the signal

//   onSelectUser() {
//     //console.log('Clicked!');
//     // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     // //this.selectedUser = DUMMY_USERS[randomIndex];

//     // //using signal

//     // this.selectedUser.set(DUMMY_USERS[randomIndex]);

//   }
// }

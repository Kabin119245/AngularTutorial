import { Component, EventEmitter, Input, Output } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

//there is second option also

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
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

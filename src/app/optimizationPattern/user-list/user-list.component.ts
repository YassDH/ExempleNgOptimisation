import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject} from '@angular/core';
import {User, UsersService} from "../users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  @Input() usersCluster: string = '';
  @Input() users: User[] = [];

  @Output() usersOutput = new EventEmitter<string>();
  userService = inject(UsersService)
  userFullName: string = '';
  addUser(newUser: string) {
    this.usersOutput.emit(newUser)
  }
}

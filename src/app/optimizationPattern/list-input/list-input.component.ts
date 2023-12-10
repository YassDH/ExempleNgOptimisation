import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, NgZone, OnInit, Output, ViewChild, inject } from '@angular/core';
import { UsersService } from '../users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.css']
})
export class ListInputComponent {
  changeDetect = inject(ChangeDetectorRef)
  userService = inject(UsersService)
  userFullName: string = '';
  @Output() add = new EventEmitter<string>();
  @ViewChild('formulaire') formulaire!: NgForm;
  addUser() {
    this.add.emit(this.formulaire.value.userFullName);
    this.userFullName = '';
  }
}

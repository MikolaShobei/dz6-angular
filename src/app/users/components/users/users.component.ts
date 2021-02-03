import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services';
import {Iuser} from '../../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Iuser[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.fetchUsers().subscribe(value => this.users = value);
  }



}

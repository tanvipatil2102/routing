import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Iuser } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  getUserData !: Array<Iuser>;
  constructor(
    private _userService : UserServiceService
  ) { }

  ngOnInit(): void {
    this.getUserData = this._userService.fetchAllData();
  }

}

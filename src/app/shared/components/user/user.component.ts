import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  getUserObject !: string;
  userObj !: Iuser;
  constructor(
    private _userService : UserServiceService,
    private _router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserObject = this._router.snapshot.params['userId'];
    if(this.getUserObject){
      this.userObj =  this._userService.getUserObj(this.getUserObject);
      console.log(this.userObj);
      
    }
  }

  onRemoveBtn(){
    console.log('event binded');
    
    this._userService.removeUser(this.userObj);
  }

}

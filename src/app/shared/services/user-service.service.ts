import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GetConfirmComponent } from '../components/get-confirm/get-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  usersArray : Array<Iuser> = [
    {
      userName : "Jhon",
      userId : "123",
      userRole : 'Candidate'
    },
    {
      userName : "Jen",
      userId : "124",
      userRole : 'Admin'
    },
    {
      userName : "May",
      userId : "125",
      userRole : 'Candidate'
    },
  ]

  constructor(
    private _router : Router,
    private _matDialog : MatDialog
  ) { }

  fetchAllData(){
    return this.usersArray
  }

  getUserObj(userId : string) : Iuser {
    return this.usersArray.find(id => id.userId === userId) as Iuser   
  }
  
  getNewUser(user: Iuser){
    this.usersArray.push(user);
    this._router.navigate(['users'])
  }

  updateUser(updatedUser : Iuser){
    let getIndex = this.usersArray.findIndex(user => user.userId === updatedUser.userId);
    this.usersArray[getIndex] = updatedUser
    this._router.navigate(['users'])
  }
  
  removeUser(userObj: Iuser){

    let matDialogRef = this._matDialog.open(GetConfirmComponent);
        matDialogRef.afterClosed()
        .subscribe(ref => {
          if(ref){
            let getIndex = this.usersArray.findIndex(user => user.userId === userObj.userId)
            this.usersArray.splice(getIndex, 1);
            this._router.navigate(['users'])
          }
        })
  }
}

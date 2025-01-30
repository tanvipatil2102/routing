import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UuidService } from '../../services/uuid.service';
import { UserServiceService } from '../../services/user-service.service';
import { Iuser } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm !: FormGroup;
  isInEditMode : boolean = false;
  getId !: string;
  mode : string = 'create';
  getUserObj !: Iuser;
  constructor(
    private _routes : ActivatedRoute,
    private _uuidService : UuidService,
    private _userService : UserServiceService
  ) { }

  ngOnInit(): void {
    this.formSetup()
    this.editModeSetup()
  }

  editModeSetup(){
    this.getId = this._routes.snapshot.params['userId']
    if(this.getId){
      this.isInEditMode = true;
      this.mode = 'edit'
      console.log(this.mode);
      
      this.getUserObj = this._userService.getUserObj(this.getId);
      this.userForm.patchValue(this.getUserObj);
    }else{
      this.isInEditMode = false;
      this.mode = 'create'
    }
  }

  formSetup(){
    this.userForm = new FormGroup({
      userName : new FormControl(null, [Validators.required]),
      userRole : new FormControl(null, [Validators.required])
    })
  }

  onUserAdd(){
    console.log(this.mode);
    if(this.userForm.valid){
      
      if(this.mode === 'create'){
        let obj = {...this.userForm.value, userId : this._uuidService.uuid()}
        this._userService.getNewUser(obj);
      }

      if(this.mode === 'edit'){
        let updatedUser = {...this.userForm.value, userId : this.getId};
        this._userService.updateUser(updatedUser);
        console.log(updatedUser);
        
      }
    }
  }
}

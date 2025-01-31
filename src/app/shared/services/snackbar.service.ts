import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _matSnackbar : MatSnackBar
  ) { }

  openSnackBar(msg : string){
    this._matSnackbar.open(msg, "Close", {
      horizontalPosition : 'center',
      verticalPosition : 'bottom',
      duration : 3000
    })
  }
}

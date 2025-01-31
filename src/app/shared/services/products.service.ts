import { Injectable } from '@angular/core';
import { Iproduct } from '../models/product';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { GetConfirmComponent } from '../components/get-confirm/get-confirm.component';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArr: Array<Iproduct> = [
    {
      pName : 'Samsung TV',
      pId : '123',
      pStatus : 'Delivered'
    },
    {
      pName : 'Iphone 16 pro',
      pId : '124',
      pStatus : 'In-Progress'
    }
  ]
  constructor(
    private _route : Router,
    private _matDialog : MatDialog,
    private _snackbar : SnackbarService
  ) { }
  fetchArray(){
    return this.productsArr
  }

  getProdObj(id :string) : Iproduct{
    return this.productsArr.find(prod => prod.pId === id) as Iproduct
  }

  addUser(product : Iproduct){
    this.productsArr.push(product);
    this._route.navigate(['products'])
    this._snackbar.openSnackBar('The Product Added Successfully !!!');
  }

  updateProduct(prodObj : Iproduct){
    let getIndex = this.productsArr.findIndex(prod => prod.pId === prodObj.pId);
    this.productsArr[getIndex] = prodObj
    this._route.navigate(['products'])
    this._snackbar.openSnackBar('The Product Updated Successfully !!!');

  }

  removeProduct(prod : Iproduct){
    let matDialogRef = this._matDialog.open(GetConfirmComponent);
    matDialogRef.afterClosed()
    .subscribe(ref => {
      if(ref){
        let getIndex = this.productsArr.findIndex(product => product.pId === prod.pId);
        this.productsArr.splice(getIndex, 1);
        this._route.navigate(['products'])
      }
    })

  }
}

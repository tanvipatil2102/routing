import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm !: FormGroup;
  isInEditMode : boolean = false;
  getId !: string;
  mode : string = 'create';
  getProdObj !: Iproduct;

  constructor(
    private _uuidService : UuidService,
    private _productService : ProductsService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formSetup();
    this.editModeSetup();
  }

  editModeSetup(){
    this.getId = this._route.snapshot.params['pId']

    if(this.getId){
      this.isInEditMode = true;
      this.mode = 'edit'

      this.getProdObj = this._productService.getProdObj(this.getId);
      this.productForm.patchValue(this.getProdObj);
    }else{
      this.isInEditMode = false;
      this.mode = 'create'
    }
  }

  formSetup(){
    this.productForm = new FormGroup({
      pName : new FormControl(null,[Validators.required]),
      pStatus : new FormControl(null,[Validators.required])
    })
  }

  onProductAdd(){
    if(this.productForm.valid){
      if(this.mode === 'create'){
        let obj = {...this.productForm.value, pId : this._uuidService.uuid()}
      this._productService.addUser(obj)

      }else if(this.mode === 'edit'){
        let obj = {...this.productForm.value, pId : this.getId};
        this._productService.updateProduct(obj);
      }
    }
  }

}

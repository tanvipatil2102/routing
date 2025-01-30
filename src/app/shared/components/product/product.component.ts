import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  getId !: string;
  prodObj !: Iproduct;

  constructor(
    private _router : ActivatedRoute,
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    this.getId = this._router.snapshot.params['pId'];
    if(this.getId){
      this.prodObj = this._productService.getProdObj(this.getId)
    }
  }

  onRemove(){
    
    this._productService.removeProduct(this.prodObj);
  }

}

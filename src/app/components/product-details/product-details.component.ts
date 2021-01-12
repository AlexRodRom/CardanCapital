import { ComponentProduct, StructuredProduct } from './../../classes/structured-product';
import { ProductSevice } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  isin: string;
  productSelected: StructuredProduct;
  newComponent: ComponentProduct;
  constructor(private ruta: ActivatedRoute, public productServ: ProductSevice) {
    this.newComponent = {"type":"ZC","value":null,"start_date":null, "quantity":null, "tickers":[]};
  }

  trackByIdx(index: number, value: any) {
    return index;
  }

  ngOnInit(): void {
    const strIsin = 'isin';
    this.ruta.params.subscribe(params => {
      this.isin = params[strIsin];
      console.log(this.isin);
      this.productSelected = this.productServ.products.find(x => x.isin === this.isin);
    });
  }

  onSubmitProduct(form: NgForm): void {
    console.log(form.value);

    var tickers = new Array();

    if(form.value["tickers1"]!=null){
      tickers.push(form.value["tickers1"]);
      if(form.value["tickers2"]!=null){
        tickers.push(form.value["tickers2"]);
        if(form.value["tickers3"]!=null){
          tickers.push(form.value["tickers3"]);
        }
      }
    }

    var comp = {
      "type":form.value["type"],
      "value":form.value["value"],
      "start_date":form.value["start_date"],
      "tickers": tickers,
      "quantity":form.value["quantity"]
    };

    this.productSelected.components.push(comp);
    form.resetForm();
  }

  onModelChange(change:any){
    console.log(change);
  }
}

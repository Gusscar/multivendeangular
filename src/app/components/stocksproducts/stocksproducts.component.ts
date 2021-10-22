import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StocksService } from 'src/app/services/stocks.service';
import { NgxSpinnerService } from "ngx-spinner";
import { SpinnersService } from 'src/app/services/spinners.service';

@Component({
  selector: 'app-stocksproducts',
  templateUrl: './stocksproducts.component.html',
  styleUrls: ['./stocksproducts.component.css']
})
export class StocksproductsComponent implements OnInit {

  products: any[] = [];
  amounts: any[]=[];
  warehouseId:string=''
  

  constructor(private stockServices: StocksService,
    private spinnerServices: SpinnersService,
    private router: ActivatedRoute, 
    private route: Router) {

    // this.provider= new ProviderModel;
    this.router.params.subscribe(params => {
      this.getStocksProducts(params['id'])
      this.warehouseId = params['id']
    })
  }

  ngOnInit(): void { 

  }

  getStocksProducts(id: string) {
    this.stockServices.getBodega(id).subscribe((resp: any) => {
      console.log(resp)
      this.products = resp
    })
  }



  setAmount(value:any, sku:number){
    
    this.amounts = this.amounts.filter(x=> x.code !== sku)
    
    this.amounts = [
      ...this.amounts,
      {
        code: sku,
        amount: value.target.value
      }
    ]
    
  }
  
  getUpdateStocks(){

    
  this.stockServices.getUpdateStocks(this.amounts, this.warehouseId)

  
  }

}

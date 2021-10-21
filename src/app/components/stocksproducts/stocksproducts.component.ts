import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StocksService } from 'src/app/services/stocks.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-stocksproducts',
  templateUrl: './stocksproducts.component.html',
  styleUrls: ['./stocksproducts.component.css']
})
export class StocksproductsComponent implements OnInit {

  products: any[] = []
  amount: any[] = []

  constructor(private stockServices: StocksService,
    private router: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private route: Router) {

    // this.provider= new ProviderModel;
    this.router.params.subscribe(params => {
      this.getStocksProducts(params['id'])

    })
  }

  ngOnInit(): void {

  }

  getStocksProducts(id: string) {
    this.stockServices.getBodega(id).subscribe((resp: any) => {
      console.log(resp)
      this.products = resp})
  }

  onClick() {


  }


}

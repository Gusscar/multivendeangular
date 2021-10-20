import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StocksService } from 'src/app/services/stocks.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks:any[]=[]

  constructor(private stockServices:StocksService,
    private router:Router) { }

  ngOnInit(): void {

    this.stockServices.getStock().subscribe((resp: any)=>{
    this.stocks= resp})     
      
  }

  
  getStocksProduct(item: any) {
    return this.router.navigate(['/stocksproducts', item])
  }

}

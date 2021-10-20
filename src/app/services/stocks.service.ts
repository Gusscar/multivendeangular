import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const token = localStorage.getItem('token')
       
    const url = `https://app.multivende.com/${query}`
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(url, { headers })
  }

  getStock(){
    const merchantId = localStorage.getItem('merchantId')
    return this.getQuery(`api/m/${merchantId}/stores-and-warehouses/p/1`)
      .pipe(map((data: any) => data.entries));
  }

  getBodega(id:string){
    const merchantId = localStorage.getItem('merchantId')
    return this.getQuery(`api/m/${merchantId}/product-versions/p/1?_include_stock=true&_warehouse_id=${id}`)
      .pipe(map((data: any) => data.entries));
  }

}

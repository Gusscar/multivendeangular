import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TokenService } from './token.service';

const OAUTH_CLIENT = 'express-client';
const OAUTH_SECRET = 'express-secret';
const API_URL = 'https://app.multivende.com/';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET)
  })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  response: any[] = []
  redirectUrl = '';

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private static log(message: string): any {
    console.log(message);
  }


  constructor(
    private http: HttpClient, private tokenService: TokenService) { }

  getLogin() {
    const url = `https://app.multivende.com/apps/authorize?response_type=code&client_id=896123781342&redurect_uir=http://localhost:3000/configuration&scope=read:checkouts`
    return this.http.get(url)
  }

  public saveCode(code: string) {
    localStorage.setItem('code', code);
  }
  private baseUrl = 'https://app.multivende.com/oauth/access-token'

  consulta() {
    console.log('consulta')
    // this.tokenService.removeToken();
    // this.tokenService.removeRefreshToken();
    const codeparam = localStorage.getItem('code')
    const body = {
      client_id: 896123781342,
      client_secret: "MjA5tPEuOkYS600yeJdDNCteBS5uKsHxdugztcXiWiOKqYmlYT",
      grant_type: "authorization_code",
      code: `${codeparam}`
    };
    this.http.post<any>(this.baseUrl, body)
    .subscribe(resp=> 
          { this.tokenService.saveToken(resp.token);
          this.tokenService.saveRefreshToken(resp.refreshToken);
          localStorage.setItem('merchantId', resp.MerchantId)
          localStorage.setItem('token', resp.token)}
      ),
      catchError(AuthService.handleError)
      
  }



  refreshToken(refreshData: any) {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const codeparam = localStorage.getItem('code')
    const body = {
      client_id: 896123781342,
      client_secret: "MjA5tPEuOkYS600yeJdDNCteBS5uKsHxdugztcXiWiOKqYmlYT",
      grant_type: "authorization_code",
      code: `${codeparam}`
    };
    return this.http.post<any>(this.baseUrl, body).pipe(
      map(res => {
        this.tokenService.saveToken(res.access_token);
        this.tokenService.saveRefreshToken(res.refresh_token);
      }),
      catchError(AuthService.handleError))
  }


  getQuery(query: string) {
    const token = localStorage.getItem('token')

    const url = `https://app.multivende.com/${query}`
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get(url, { headers })
  }

  getProviders() {
    const merchantId = localStorage.getItem('merchantId')
    return this.getQuery(`api/m/${merchantId}/providers/p/1`)
      .pipe(map((data: any) => data.entries));
  }


  newProviders(form: any) {
    const merchantId = localStorage.getItem('merchantId')
    const token = localStorage.getItem('token')

    console.log('merchantId', merchantId)
    const url = `https://app.multivende.com/api/m/${merchantId}/providers`

    const body = {
      name: form.name,
      country: form.country,
      email: form.email,
      direction: form.direction,
      activity: form.activity,
      taxId: form.taxId,
      phoneNumber: form.phoneNumber,
      zipCode: form.zipCode,
      code: form.code
    };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    this.http.post<any>(url, body, { headers }).subscribe(data => {
      console.log(data);
    });

  }

  EditProviders(form: any, id: string) {
    const merchantId = localStorage.getItem('merchantId')
    const token = localStorage.getItem('token')
    console.log('esto es el form', form)

    console.log('merchantId', merchantId)
    const url = `https://app.multivende.com/api/providers/${id}`

    const body = {
      name: form.name,
      country: form.country,
      email: form.email,
      direction: form.direction,
      activity: form.activity,
      taxId: form.taxId,
      phoneNumber: form.phoneNumber,
      zipCode: form.zipCode,
      code: form.code
    };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.put<any>(url, body, { headers });

  }

  getProviderId(id: string) {
    const merchantId = localStorage.getItem('merchantId')
    return this.getQuery(`api/providers/${id}`)
    // .pipe(map((data: any) => console.log(data)));
  }

  getDeleteProvider(id: string) {
    const token = localStorage.getItem('token')
    const url = `https://app.multivende.com/api/providers/${id}`
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.delete<any>(url, { headers })


  }








}

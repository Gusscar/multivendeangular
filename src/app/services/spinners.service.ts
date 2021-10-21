import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnersService {

  constructor(private spinnerServices: NgxSpinnerService,) { }

  public callSpinners(){
    this.spinnerServices.show()
  }

  public stopSpinners(){
    this.spinnerServices.hide()
  }
}

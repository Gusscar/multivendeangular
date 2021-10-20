import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProviderModel } from 'src/app/models/provider.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-newprovider',
  templateUrl: './newprovider.component.html',
  styleUrls: ['./newprovider.component.css']
})
export class NewproviderComponent implements OnInit {
  provider: ProviderModel;

  constructor(private authService: AuthService,
    private router:Router) {

    this.provider = new ProviderModel;

   }

  ngOnInit(): void {


  }
  onSubmit(form: NgForm) {
    this.authService.newProviders(form.value)
    this.router.navigate(["/provider"])
  }

}

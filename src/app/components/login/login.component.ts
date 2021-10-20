import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
    ) { }

  ngOnInit(): void {

    console.log(this.authService.getLogin()) 
  }

  onNavigate(){    
    window.location.href="https://app.multivende.com/apps/authorize?response_type=code&client_id=896123781342&redurect_uir=http://localhost:3000/configuration&scope=read:checkouts"; }

  

}

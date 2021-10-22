import { Component, OnInit } from '@angular/core';
import { AuthService }from '../../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthService ) { }

  ngOnInit(): void {
  }

  login(){    
    window.location.href="https://app.multivende.com/apps/authorize?response_type=code&client_id=896123781342&redurect_uir=http://localhost:3000/configuration&scope=read:checkouts"; }


}


import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProviderModel } from 'src/app/models/provider.model';
import Swal from 'sweetalert2';
import { SpinnersService } from 'src/app/services/spinners.service';



@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  resp: any[] = [];
  pageActual:number = 1;

  provider: ProviderModel[] = []

  constructor(private authServices: AuthService,
    private spinnerServices: SpinnersService,
    private router: Router) {
    this.getProvider()
  }

  ngOnInit(): void {

  }

  getProvider() {
    this.authServices.getProviders().subscribe((data: any) => {
      this.resp = data
    })
  }

  getEdit(item: any) {
    return this.router.navigate(['/editprovider', item])
  }
  getNewProvider() {
    return this.router.navigate(['/newprovider'])
  }

  getDeleteProvider(item: any, i: number) {

    Swal.fire({
      title:'Esta seguro?',
      text: `Estas seguro de borrar ${item.name} `,
      icon:'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then(resp=>{
      if (resp.value) {
        this.resp.splice(i, 1)
        this.authServices.getDeleteProvider(item._id).subscribe()
        
      }
    })
    
  }



}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderModel } from 'src/app/models/provider.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprovider',
  templateUrl: './editprovider.component.html',
  styleUrls: ['./editprovider.component.css']
})
export class EditproviderComponent implements OnInit {

  provider: ProviderModel;
  item: any = {}

  constructor(private authService: AuthService,
    private router: ActivatedRoute,
    private route: Router) {

    this.provider = new ProviderModel;
    this.router.params.subscribe(params => {
      this.getProviderId(params['id'])

    })

  }

  ngOnInit(): void {

  }

  getProviderId(id: string) {
    this.authService.getProviderId(id)
      .subscribe(data => this.item = data)
  }

  onSubmit(form: NgForm, id: string) {
    Swal.fire({
      title: 'Esta seguro?',
      text: `Estas seguro de Editar `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(resp => {
      if (resp.value) {
        this.authService.EditProviders(form.value, id).subscribe()
        this.route.navigate(['/provider'])

      }
    })


  }

}

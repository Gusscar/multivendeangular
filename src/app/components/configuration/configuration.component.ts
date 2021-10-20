import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

   firstParam: any='';

  constructor(private route: ActivatedRoute,
    private router:Router,
    private authServices: AuthService) {
      this.firstParam=this.route.snapshot.queryParamMap.get('code')
    this.authServices.saveCode(this.firstParam)

  }

  ngOnInit(): void {    

    let currentUser = localStorage.getItem('code');
    if (currentUser) {
      this.router.navigate(['/home']);
       
    } else {
    
      return ;
    }
    
    this.authServices.consulta()

    
  }

}

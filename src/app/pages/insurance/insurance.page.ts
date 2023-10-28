import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage implements OnInit {
response:any=[];
  constructor(private api : LoginService,
    private router : Router) { }

  ngOnInit() {
    this.insurance_data();
  }
insurance_data(){
   
    this.api.get_insurance_list().subscribe({
        next:(data) =>{
          console.log(data);
          this.response = data;
          
          
        },
        error:() =>{
          console.log('error');
       
        },
        complete:() =>{
   
        }
      })
    }

    open(name:any,phone:any,status:any,location:any,start_date:any,auth_name:any){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          name:name,
          phone:phone,
          status:status,
          location:location,
          start_date:start_date,
          auth_name:auth_name
        }
      };
      
      this.router.navigate(['/viewfinancepartner'], navigationExtras);

    }
}

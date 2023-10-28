import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {
  response:any=[];

  constructor(private api : LoginService,
    private router : Router) { }

  ngOnInit() {
    this.finance_data();
  }
  finance_data(){
   
    this.api.get_finance_list().subscribe({
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

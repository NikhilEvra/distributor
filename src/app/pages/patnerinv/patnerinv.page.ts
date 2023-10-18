import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-patnerinv',
  templateUrl: './patnerinv.page.html',
  styleUrls: ['./patnerinv.page.scss'],
})
export class PatnerinvPage implements OnInit {
  USTEMP = localStorage.getItem('user');
  getuserdata: any=[];
  
  response:any=[];
  constructor(private api : FormService,
    private router : Router) {
    if (this.USTEMP) {
      this.getuserdata = JSON.parse(this.USTEMP) ;
    }
   }

  ngOnInit() {
    this.partner_inventory();
  }

  partner_inventory(){
    this.api.get_cnf_partner_inv(this.getuserdata.dealership_name).subscribe({
        next:(data) =>{
          console.log(data[0]);
          this.response = data;
          console.log(this.response);
         
        },
        error:() =>{
          alert('error');
       
        },
        complete:() =>{
    
              
        }
      })
    }

    redirect(dat:any){
      console.log(dat)
      let navigationExtras: NavigationExtras = {
        queryParams: {
          u_id : dat
        }
      };
      
      this.router.navigate(['/viewpartnerinv'], navigationExtras);

    }
}

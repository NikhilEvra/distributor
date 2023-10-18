import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-viewpartnersales',
  templateUrl: './viewpartnersales.page.html',
  styleUrls: ['./viewpartnersales.page.scss'],
})
export class ViewpartnersalesPage implements OnInit {
  USTEMP = localStorage.getItem('user');
  getuserdata: any=[];
  
  response:any=[];
  constructor(
    private api : FormService
  ) { 
    if (this.USTEMP) {
      this.getuserdata = JSON.parse(this.USTEMP) ;
    } 
  }

  ngOnInit() {
    this.partner_sale();
  }

  partner_sale(){
    this.api.view_cnf_partner_sale(this.getuserdata.dealership_name).subscribe({
        next:(data) =>{
          // console.log(data[0]);
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

}

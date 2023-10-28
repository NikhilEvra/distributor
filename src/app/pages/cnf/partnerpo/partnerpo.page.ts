import { Component, OnInit } from '@angular/core';
import { PatnersService } from 'src/app/service/patners/patners.service';

@Component({
  selector: 'app-partnerpo',
  templateUrl: './partnerpo.page.html',
  styleUrls: ['./partnerpo.page.scss'],
})
export class PartnerpoPage implements OnInit {
  USTEMP = localStorage.getItem('user');
  getuserdata: any=[];
  response:any=[];
  constructor(
    private api : PatnersService
  ) {
    if (this.USTEMP) {
      this.getuserdata = JSON.parse(this.USTEMP) ;
    } 
   }

  ngOnInit() {
    this.cfdata();
  }

      
cfdata(){
   
  this.api.candf_ptr_po_count_by_dealername(this.getuserdata.dealership_name).subscribe({
   next:(data) =>{
    
  this.response = data;
   },
   error:() =>{
     console.log('error');
  
   },
   complete:() =>{

   }
 })
}

}

import { Component, OnInit } from '@angular/core';
import { PatnersService } from 'src/app/service/patners/patners.service';

@Component({
  selector: 'app-partnersinfo',
  templateUrl: './partnersinfo.page.html',
  styleUrls: ['./partnersinfo.page.scss'],
})
export class PartnersinfoPage implements OnInit {
  USTEMP = localStorage.getItem('user');
  getuserdata: any=[];
  response:any=[];

  constructor(private api : PatnersService) { 

    if (this.USTEMP) {
      this.getuserdata = JSON.parse(this.USTEMP) ;
    } 

  }

  ngOnInit() {
    this.cfdata();
  }

     
cfdata(){

  this.api.candf_ptr_info(this.getuserdata.dealership_name).subscribe({
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

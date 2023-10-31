import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { PatnersService } from 'src/app/service/patners/patners.service'

@Component({
  selector: 'app-partnertickets',
  templateUrl: './partnertickets.page.html',
  styleUrls: ['./partnertickets.page.scss'],
})
export class PartnerticketsPage implements OnInit {
  USTEMP = localStorage.getItem('user');
  getuserdata: any=[];
  response:any=[];
  constructor(
    private api : PatnersService,
    private router : Router
  ) {
    if (this.USTEMP) {
      this.getuserdata = JSON.parse(this.USTEMP) ;
    } 
   }

  ngOnInit() {
    this.cfdata();
  }

      
cfdata(){
   
  this.api.candf_ptr_complaints_count_by_dealername(this.getuserdata.dealership_name).subscribe({
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

land(id : any){
  // console.log(id);
  // this.router.navigate(['/viewcomplaint'], {queryParams : id});
  // this.router.navigate(['map'], {queryParams: this.station});
  let navigationExtras: NavigationExtras = {
    queryParams: {
      id:id
    }
  };

  this.router.navigate(['/p-complaints'], navigationExtras);
}



}

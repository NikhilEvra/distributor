import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-viewpartnerinv',
  templateUrl: './viewpartnerinv.page.html',
  styleUrls: ['./viewpartnerinv.page.scss'],
})
export class ViewpartnerinvPage implements OnInit {
u_id:any=[];
response:any=[];
  constructor(
    private route : ActivatedRoute,
    private api : FormService
  ) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.u_id = params;
     
    }
  );
  this.partner_inventory();
  }

  partner_inventory(){
    this.api.view_cnf_partner_inv(this.u_id.u_id).subscribe({
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatnersService } from 'src/app/service/patners/patners.service';

@Component({
  selector: 'app-viewfinancepartner',
  templateUrl: './viewfinancepartner.page.html',
  styleUrls: ['./viewfinancepartner.page.scss'],
})
export class ViewfinancepartnerPage implements OnInit {
data:any=[];
response:any=[];
  constructor(
    private route : ActivatedRoute,
    private api : PatnersService
  ) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      // this.orderby = params.orderby;
      // console.log(this.orderby); // price
      this.data = params;
      // console.log(this.data);
    }
  );
 
  }

  complaint(){
    this.api.getpartnerById(this.data.id).subscribe({
        next:(data) =>{
          // console.log(data[0]);
          this.response = data;
          
        
        },
        error:() =>{
          alert('error');
       
        },
        complete:() =>{
   
        }
      })
    }
}

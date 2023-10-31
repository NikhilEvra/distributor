import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormService } from 'src/app/service/form/form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-p-closed-complaints',
  templateUrl: './p-closed-complaints.page.html',
  styleUrls: ['./p-closed-complaints.page.scss'],
})
export class PClosedComplaintsPage implements OnInit {
  response:any=[];
  idd:any=[];
  constructor(
    private api : FormService,
    private router : Router,
    private route : ActivatedRoute,
    private loadingCtrl : LoadingController,
    ) {
     
     }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.idd = params;
      console.log(this.idd.id);
    }
  );
    this.complaint();
  }
   
  complaint(){
  this.api.getClosedComplaints(this.idd.id).subscribe({
      next:(data) =>{
        console.log(data);
        this.response = data;
        if(this.response.length == 0){
         Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': 'No Records Found',  heightAuto: false ,  timer: 3000});
          this.router.navigateByUrl('/p-complaints');
        }
      
      },
      error:() =>{
        alert('error');
     
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

    this.router.navigate(['/viewcomplaint'], navigationExtras);
    this.showLoading();
  }
  
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading please Wait...',
      duration: 3000,
    });

    loading.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-p-complaints',
  templateUrl: './p-complaints.page.html',
  styleUrls: ['./p-complaints.page.scss'],
})
export class PComplaintsPage implements OnInit {
  USTEMP = localStorage.getItem('user');
  getuserdata: any=[];

  response:any=[];
  idd:any=[];

  constructor(private router : Router,
    private loadingCtrl : LoadingController,
    private route : ActivatedRoute,
    private api : FormService) { 
      console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      } 
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

  openPage(id : any){
    this.showLoading();
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };
  
    this.router.navigate(['/p-open-complaints'], navigationExtras);
  }

  openPage2(id : any){
    this.showLoading();
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };
  
    this.router.navigate(['/p-closed-complaints'], navigationExtras);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading please Wait...',
      duration: 3000,
    });

    loading.present();
  }

  complaint(){
    this.api.getComplaints(this.idd.id).subscribe({
        next:(data) =>{
          console.log(data);
          this.response = data;
        
        },
        error:() =>{
          alert('error');
       
        },
        complete:() =>{
       
              
        }
      })
    }

    handleRefresh(event : any) {
      setTimeout(() => {
        // Any calls to load data go here
        this.complaint();
        event.target.complete();
      }, 2000);
    }

}

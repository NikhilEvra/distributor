import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormService } from 'src/app/service/form/form.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  
  USTEMP = localStorage.getItem('user');
  getuserdata: any=[];

  response:any=[];
  total:any=[];

  constructor(
    private router: Router,
    private api : FormService,
    private loadingCtrl : LoadingController,
  ) {
     console.log(this.USTEMP);
    if (this.USTEMP) {
      this.getuserdata = JSON.parse(this.USTEMP) ;
    }  }

  ngOnInit() {
    this.sales();
    this.cart();
  }

  ionViewDidLeave(){
    this.cart();
  }
  
  ionViewWillEnter(){
    this.sales();
    this.cart();
  }

  openPage(url : any){
    this.showLoading();
    this.showLoading();
    this.router.navigateByUrl(url);
  }

  sales(){
    this.api.getSales(this.getuserdata.id).subscribe({
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
 
  handleRefresh(event :any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.sales();
      this.cart();
      event.target.complete();
    }, 2000);
  };

  cart(){
    this.api.getCart(this.getuserdata.id).subscribe({
        next:(data) =>{
          console.log(data);
          this.total = data;
        
        },
        error:() =>{
          alert('error');
       
        },
        complete:() =>{
       
              
        }
      })
    }

    async showLoading() {
      const loading = await this.loadingCtrl.create({ 
        duration: 3000,
      });
      loading.present();
    }
  

  }


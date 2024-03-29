import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { ActionSheetController, LoadingController, MenuController, PopoverController } from '@ionic/angular';
import { AnyARecord } from 'dns';
import { FormService } from 'src/app/service/form/form.service';
import { LoginService } from 'src/app/service/login/login.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  result: any;
  public progress = 0.7;
  USTEMP = localStorage.getItem('user');
  showcnf= false;
  showdealer=true;

  getuserdata: any=[];

  bsubject : any=[];
  isModalOpen = false;
  result1: any = [];

  homeBanner: any = [{
    url: environment.apiurl + 'catalog/ex1_banner.png'
  },{
    url: environment.apiurl +'catalog/ex2_banner.png'
  },{
    url: environment.apiurl + 'catalog/ex2plus_banner.png'
  },{
    url: environment.apiurl +'catalog/ex3_banner.png'
  },{
    url: environment.apiurl +'catalog/mine_banner.png'
  },{
    url: environment.apiurl +'catalog/ex3plus_banner.png'
  },{
    url: environment.apiurl +'catalog/luster_banner.png'
  },{
    url: environment.apiurl +'catalog/helter_banner.png'
  },{
    url: environment.apiurl +'catalog/sparkle_banner.png'
  },{
    url: environment.apiurl +'catalog/sparkledb_banner.png'
  }]
  footerBanner: any = []
  quickLink: any = [
    {
      icon: 'assets/icon/stocks.avif',
      name: 'Inventory',
      url: '/inventory',
      heading : 'Total / Left',
    },
    {
      icon: 'assets/icon/sale.jpg',
      name: 'Sales',
      url: '/sales',
      heading : 'Total / This month',
    },
    {
      icon: 'assets/icon/complaints.avif',
      name: 'Complaints',
      url: '/complaints',
      heading : 'Open / Closed',
    },
    {
      icon: 'assets/icon/services.avif',
      name: 'Services',
      url : '/services',
      heading : 'Total ',
    },
  ]
  slideServiceReport = {
    initialSlide: 0,
    // slidesPerView: 1.1,
    autoplay: true
  }; 
  
 
  cnfdealer_total:any=[];
  myfun = false;
  cnf_sales_total:any=[];
  cnf_ptr_inv_count:any=[];

  menu1:any=[];
  response:any=[];
  response2:any=[];
  response3:any=[];
  response4:any=[];
  response5:any=[];
  response6:any=[];
  response7:any=[];
  cnf_ptr_ticket_count:any=[];
  cnf_ptr_po_count:any=[];

  constructor(
    private router : Router,
    private actionSheetCtrl : ActionSheetController,
    private menuctrl : MenuController,
    private loadingCtrl : LoadingController,
    private api2 : LoginService,
    private api : FormService,
    private popovercontroller : PopoverController,
  ) { 
    // console.log(this.USTEMP);
    if (this.USTEMP) {
      this.getuserdata = JSON.parse(this.USTEMP) ;
    } 
     
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

 ionViewWillEnter(){
  // console.log(this.getuserdata);
  this.menuctrl.enable(true);
          if (localStorage.getItem("user") === null) 
          {
            Swal.fire({
                        'imageUrl' :'assets/icon/login.gif',
                        'imageHeight':'100px', 
                        'title': 'Please Login Again !',
                         heightAuto: false , 
                         timer: 3000
                        });
                        
            this.router.navigateByUrl('/login');
          }

          // if(this.menu1 === null)
          // {
          //   this.router.navigateByUrl('/login');
          //   console.log("null behaviour");
          // }else{
          //   console.log("yes");
          // }
 }

  ngOnInit() {
    this.showLoading();
    if(this.getuserdata.usertype == 'C&F'){
      this.showcnf = true;
      this.showdealer = false;
      this.cfdata();
      this.cfdata2();
      this.cfdata3();
      this.cfdata4();
      this.cfdata5();
    }
    this.dashData();


   
  }

  menu(): void{
    this.api2.menu.subscribe(res => {
      console.log(res);
      this.menu1 = res;
      console.log(this.menu1);
    });
  }
 
  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

  openPage(url : any){
    this.showLoading();
    this.router.navigateByUrl(url);
  }

  land(url : any){
    this.showLoading();
    this.router.navigateByUrl(url);
  }

  logout(){
    App.exitApp();
    localStorage.clear();
    this.api2.menu.unsubscribe();
    this.router.navigateByUrl('/login');
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading please Wait...',
      duration: 3000,
    });

    loading.present();
  }

  hide(){
    this.myfun = !this.myfun;
  }

  dashData(){
   
    this.api.getdashdata(this.getuserdata.id).subscribe({
        next:(data) =>{
          console.log(data);
          this.response =  data[0];
          this.response2 = data[1];
          this.response3 = data[2];
          this.response4 = data[3];
          this.response5 = data[4];
          this.response6 = data[5];
          this.response7 = data[6];

          console.log(this.response);
          console.log(this.response2);
          console.log(this.response3);
          console.log(this.response4);
          
        },
        error:() =>{
          console.log('error');
       
        },
        complete:() =>{
   
        }
      })
    }

    handleRefresh(event : any) {
      setTimeout(() => {
        // Any calls to load data go here
        // this.dashData();
        // this.cfdata();
        this.ngOnInit();
        event.target.complete();
      }, 2000);
    }

    
redirect(url:any){
  
  this.popovercontroller.dismiss();
  this.router.navigateByUrl(url);
}
   
cfdata(){
     
  this.api.candf_dash_data(this.getuserdata.dealership_name).subscribe({
      next:(data) =>{
        console.log(data);
        this.cnfdealer_total = data.total;
      },
      error:() =>{
        console.log('error');
     
      },
      complete:() =>{
      
      }
    })
  }

     
cfdata2(){
   
  this.api.candf_dash_count(this.getuserdata.dealership_name).subscribe({
      next:(data) =>{
        console.log(data);
     this.cnf_sales_total = data.total;
      },
      error:() =>{
        console.log('error');
     
      },
      complete:() =>{
 
      }
    })
  }


       
cfdata3(){
   
  this.api.candf_ptr_ticket_count(this.getuserdata.dealership_name).subscribe({
      next:(data) =>{
        console.log(data.total);
     this.cnf_ptr_ticket_count = data.total;
      },
      error:() =>{
        console.log('error');
     
      },
      complete:() =>{
 
      }
    })
  }

       
cfdata4(){
   
     this.api.candf_ptr_po_count(this.getuserdata.dealership_name).subscribe({
      next:(data) =>{
        console.log(data);
     this.cnf_ptr_po_count = data.total;
      },
      error:() =>{
        console.log('error');
     
      },
      complete:() =>{
 
      }
    })
  }

       
cfdata5(){
   
  this.api.candf_ptr_inv_count(this.getuserdata.dealership_name).subscribe({
   next:(data) =>{
     console.log(data.total);
  this.cnf_ptr_inv_count = data[0].total;
   },
   error:() =>{
     console.log('error');
  
   },
   complete:() =>{

   }
 })
}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CartService } from 'src/app/service/cart/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.page.html',
  styleUrls: ['./cart1.page.scss'],
})
export class Cart1Page implements OnInit {
  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];

  form!: FormGroup
  model:any=[];
  model_name:any=[];
  response:any=[];
  myfun = false;
  priceWithbatt!:any;
  priceWithOutbatt!:any;
  amount!:any;
  amount2!:any;
  total!:any;
  varient!:any;
  price:any=[];
  image:any=[];

  handlerMessage = '';
  roleMessage = '';

  modelinv:any=[];
  myfun2 = false;
  unit_price : any=[];
  batterytype:any=[];
  count:any=[];

  constructor(
    private route : ActivatedRoute,
    private formb : FormBuilder,
    private api : CartService,
    private router : Router,
    private loadingCtrl : LoadingController,
    private alertController: AlertController
  ) 
  { console.log(this.USTEMP);
    if (this.USTEMP) {
      this.getuserdata = JSON.parse(this.USTEMP) ;
    }
  }

  Initform(){
    this.form = this.formb.group({    
     dealerid: [this.getuserdata.id, Validators.required],
     model : [this.model_name,Validators.required],
     color : ['',Validators.required],
     battery:['',Validators.required],
     quantity_with_batt: [this.priceWithbatt],
     quantity_without_batt:[this.priceWithbatt],
    // totalamount:[this.total, Validators.required],
    amountWithOutBatt:[this.amount2],
    amountWithBatt:[this.amount],
    })
  }
  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
      this.model = params;
      this.model_name = this.model.model;
    }
  );
  this.amount = '0';
  this.amount2 = '0';

  this.Initform();
  // this.getdata();
      this.checkinv();
      this.get_battery_type();
      this.check_product_availability();
  }

  checkinv(){
    
    this.api.checkmodelinv(this.model_name).subscribe({
      next:(data) =>{
        console.log(data);
       
    this.modelinv = data;
    // console.log(this.modelinv.messasge);
       
     
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
        // this.loadingCtrl.dismiss();
        if(this.modelinv.status == 400){
    Swal.fire({'title': 'Coming Soon!',  heightAuto: false ,  timer: 3000});
    this.router.navigateByUrl('/po');

        }
        this.getdata();
      }
    })
    
  }


  getdata(){
    this.showLoading();
    this.api.getVarients(this.model_name).subscribe({
      next:(data) =>{
        console.log(data);
        this.response = data;
        this.image = this.response[0].banner;
    
       
     
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
        // this.loadingCtrl.dismiss();
      }
    })
    
  }

  show(){
  //  if(this.form.value.battery == 'L-ION'){
  //   alert('yes')
  //  }
  this.priceWithbatt=null;
  this.priceWithOutbatt=null;

    // console.log(this.form.value.battery)
    this.api.getPrice(this.varient, this.model_name, this.getuserdata.usertype,this.form.value.battery,this.getuserdata.plan_type).subscribe({
      next:(data) =>{
        console.log(data);
        this.price = data;
        console.log(this.price[0].price_wb);
        this.unit_price = this.price[0].price_wb;
        
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
        this.myfun = true;
      
        // this.loadingCtrl.dismiss();
      }
    })
    
  }
  calAmount(){
   this.amount = this.priceWithbatt * this.price[0].price_wb;
  }
  calAmount2(){
    this.amount2 = this.priceWithOutbatt * this.price[0].price_wb;
   }

   submit(){
    this.showLoading();
    if(!this.form.value.quantity_without_batt){
      this.form.value.quantity_without_batt = '0'
      this.amount = '0';
   
    }
    if(!this.form.value.quantity_with_batt){
      this.form.value.quantity_with_batt = '0';
      this.amount2 = '0';
     }
    console.log(this.form.value);  
     
    this.api.postCartData(this.form.value.dealerid,this.form.value.model,this.form.value.color,this.form.value.quantity_with_batt,this.form.value.quantity_without_batt,this.form.value.amountWithBatt,this.form.value.amountWithOutBatt,this.unit_price).subscribe({
      next:(data) => {
        console.log(data);
        this.response = data;
      },
      error:() => {
        console.log('err');
         Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': 'Internal Server Error!',  heightAuto: false ,  timer: 3000});
      },
      complete:() => {  
        this.form.reset();
        Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title':'Added To Cart',  heightAuto: false ,  timer: 3000});
        this.router.navigateByUrl('/viewpo');

        // this.loadingCtrl.dismiss();
      }
    })
   }

   async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading please Wait...',
      duration: 2000,
    });

    loading.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are You Sure',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.submit();
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
  showbatterytype(){
  this.myfun2 = true;
  }

  get_battery_type(){
    
    this.api.get_battery(this.form.value.model,this.getuserdata.plan_type).subscribe({
      next:(data) =>{
        console.log(data);
       
    this.batterytype = data;
    // console.log(this.modelinv.messasge);
       
     
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
        // this.loadingCtrl.dismiss();
        
      }
    })
    
  }

  check_product_availability(){
    
      this.api.check_plan_type_product_count(this.form.value.model,this.getuserdata.plan_type).subscribe({
      next:(data) =>{
      console.log(data);
       this.count = data;     
      },
      error:() =>{
        // alert('error');
        Swal.fire({'title':'Interval Server Error',  heightAuto: false ,  timer: 3000});
     
      },
      complete:() =>{
     console.log(this.count.total)
        if(this.count.total == '0'){
          Swal.fire({'title':'Coming Soon!',  heightAuto: false ,  timer: 3000});
          this.router.navigateByUrl('/po');
        }
        
      }
    })
    
  }
}

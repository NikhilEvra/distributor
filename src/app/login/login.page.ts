import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { LoginService } from '../service/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form! : FormGroup;
  response: any=[];



  constructor(
    private router : Router,
    private formb: FormBuilder,
    private toastctrl : ToastController,
    private api : LoginService,
    private loadingCtrl: LoadingController,
    private menuCtrl : MenuController,
  ) { }


initForm(){  
    this.form = this.formb.group({    
      phone: ['7982567755', Validators.required],
      password: ['1111', Validators.required],  
      u_type:['',Validators.required]
    })
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.initForm();
    
  }
  ionViewDidLeave(){
    this.loadingCtrl.dismiss();
    this.menuCtrl.enable(true);
  }

 
  
  openPage(url :any){
    this.router.navigateByUrl(url);
  }
 login(){
  this.showLoading();
  // this.api.getlogindata(this.form.value.phone, this.form.value.password).subscribe({
  //   next:(data) =>{
  //     console.log(data);
  //     this.response = data;
  //     // this.response2 = data;
  //   },
  //   error:() =>{
  //     // alert('error occured');
  //     this.presentToast('Internal Server Error.' , 'Danger');
  //   },
  //   complete:() =>{
   
  //     if(this.response.status == false){
  //       Swal.fire({'title': 'You have successfully log in', heightAuto: false});
  //       // this.presentToast(this.response.message , 'warning');
  //       // alert(this.response.message)
  //     }
  //     else{
  //       // localStorage.setItem('user',JSON.stringify(this.response[0]));
  //       // this.api2.menu.next(this.response2);
        
  //       this.router.navigateByUrl('/app/tabs/tab1');
        
  //       Swal.fire({'title': 'You have successfully log in', heightAuto: false});
        
  //       // this.presentToast('You have successfully log in' , 'success');
  //     }        
  //   }
  // })
  this.router.navigateByUrl('/dashboard');
  Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': 'You have successfully loged in',  heightAuto: false ,  timer: 3000});
}

async presentToast(msg: any, color: any) {
  const alert = await this.toastctrl.create({
    message: msg,
    color: color,
    duration: 3000,
    position: 'middle'
  })
  alert.present();
}

signup(){
  this.router.navigateByUrl('/signup');
}


async showLoading() {
  const loading = await this.loadingCtrl.create({
    // message: 'Dismissing after 3 seconds...',
    // duration: 3000,
  });

  loading.present();
}
}

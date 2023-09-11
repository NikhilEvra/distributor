import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormService } from 'src/app/service/form/form.service';
import Swal from 'sweetalert2';

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


@Component({
  selector: 'app-uploadsignature',
  templateUrl: './uploadsignature.page.html',
  styleUrls: ['./uploadsignature.page.scss'],
})
export class UploadsignaturePage implements OnInit {
 form!:FormGroup;
 USTEMP = localStorage.getItem('user');
 getuserdata:any=[];
 handlerMessage = '';
 roleMessage = '';
 response:any=[];
  constructor(
    private formb : FormBuilder,
    private alertController: AlertController,
    private router : Router,
    private api : FormService,
    private iab : InAppBrowser
  ) {
    console.log(this.USTEMP);
    if (this.USTEMP) {
      this.getuserdata = JSON.parse(this.USTEMP) ;
    }
   }

  ngOnInit() {
    this.initform();
  }

  initform(){
    this.form =this.formb.group({
      signature:['',Validators.required],
      name:[this.getuserdata.dealership_name],
      check:['',Validators.requiredTrue]
    });
  }

  uploadPhoto(fileChangeEvent : any) {
    // Get a reference to the file that has just been added to the input
    const photo = fileChangeEvent.target.files[0];
    console.log(photo);
    this.form.get('signature')?.setValue(photo);
    // Create a form data object using the FormData API
    // let formData = new FormData();
    // Add the file that was just added to the form data 
    // formData.append("photo", photo, photo.name);
    // this.httpapi.uploadImg(formData).subscribe({ 
    //   next:(dat) => {
    //     console.log(dat);
    //   }
    // })
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
  
  submit(){
      console.log(this.form.value);  
      this.api.add_signature(this.form.value,this.getuserdata.id).subscribe({
        next:(data) => {
          console.log(data);
          this.response = data;
           Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': this.response.message,  heightAuto: false ,  timer: 3000});
       
        },
        error:() => {
          console.log('err');
         
            Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': 'Internal Server Error!',  heightAuto: false ,  timer: 3000});
           
        },
        complete:() => {
        this.form.reset();
            Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': this.response.message,  heightAuto: false ,  timer: 3000});
           this.router.navigateByUrl('/dashboard');
        }
      })
  }

  openInAppBrow2() {
    const browser = this.iab.create('https://evraconnect.com/apifolder/app_api/privacy_policy.php', '_system', 'location=no, zoom=yes ');
    browser.on('loadstart').subscribe(data => {
     console.log(data.url);
     if (data.url === 'https://evramedia.com/') {
       browser.close();
     }
    });
   }
}

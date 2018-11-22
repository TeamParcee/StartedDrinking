import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { AlertButton, AlertInput } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) { }


 


  async showToast(message){
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2500,
      position: "bottom"
    })
    toast.present();
  }
  async showToastCloseBtn(message){
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2500,
      position: "bottom",
      showCloseButton: true,
    })
    toast.present();
  }
  async showLoading(message){
    let loading = await this.loadingCtrl.create({
      message: message
    })
   loading.present();
  }
  async hideLoading(){
    this.loadingCtrl.dismiss();
  }
  async showAlertConfirmation(header, subHeader, message, btnTxt){
    let alert = await this.alertCtrl.create({
      header: header,
      subHeader: subHeader,
      message: message,   
      buttons: [{
        text: "Cancel",
        role: "cancel"
      },{
        text: btnTxt,
        handler: () =>{
          alert.dismiss(btnTxt)
        }
      }]
    })
    alert.present();
    return await alert.onDidDismiss();
     
  }
  async showAlertBasic(header, message){
    let alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ["OK"]
    })
    alert.present();
    let result = await alert.onDidDismiss;
    return result;
  }
  async showAlertPrompt(header, inputs: AlertInput[], btns: AlertButton[]){
    let alert = await this.alertCtrl.create({
      header: header,
      inputs: inputs,
      buttons: btns
    })
    alert.present()
    
  }

}

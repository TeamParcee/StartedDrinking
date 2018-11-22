import { AlertController } from '@ionic/angular';
import { AlertButton } from '@ionic/core';
import { ComponentsService } from './../../services/components/components.service';
import { FirestoreService } from './../../services/firestore/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private fs: FirestoreService,
    private component: ComponentsService,
  ) { }

  users;
  async ngOnInit() {
 this.fs.subscribeCol("users").subscribe((docs)=>{
    this.users = docs;
  });
 
  
  }

  async showAlert(){
    let header = "This is the header";
    let subHeader = "This is the subheader";
    let message = "This is the message";
    let btn = "kkkk";
    let alert = await this.component.showAlertConfirmation(header, subHeader, message, btn);
    console.log(alert.data)
  }
}

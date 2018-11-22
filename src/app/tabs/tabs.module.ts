import { AccountPageModule } from './../pages/account/account.module';
import { FriendsPageModule } from './../pages/friends/friends.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

import { HomePageModule } from '../pages/home/home.module';
import { DrinksPageModule } from '../pages/drinks/drinks.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    FriendsPageModule,
    AccountPageModule,
    DrinksPageModule,

  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

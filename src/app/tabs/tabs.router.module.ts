import { DrinksPage } from './../pages/drinks/drinks.page';
import { AccountPage } from './../pages/account/account.page';
import { FriendsPage } from './../pages/friends/friends.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../pages/home/home.page';
;

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'friends',
        outlet: 'friends',
        component: FriendsPage,
      },{
        path: 'drinks',
        outlet: 'drinks',
        component: DrinksPage,
      },
      {
        path: 'account',
        outlet: 'account',
        component: AccountPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

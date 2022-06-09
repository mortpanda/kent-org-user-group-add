import { Injectable } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PrimeIcons} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  // itemMenubar:MenuItem[];

  constructor() { }


  itemMenubar=[
    {
      label: 'ホーム',
      icon: "assets/img/cabin_white.png",
      command: () => {
        this.GoHome();
      }
    },
    {
      label: 'ログアウト',
      icon: "assets/img/exit_white.png",
      command: () => {
        this.Logout();
      }
    },
  ];


  async Logout() {
    // this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  }

  async GoHome() {
    // window.location.replace(this.OktaConfigService.strPostLogoutURL);
  }

}

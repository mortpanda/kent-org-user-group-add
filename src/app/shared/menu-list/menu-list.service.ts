import { Injectable } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PrimeIcons} from 'primeng/api';
import { OktaSDKAuthService } from '../okta/okta-auth.service';
import { OktaConfigService } from '../okta/okta-config.service';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  // itemMenubar:MenuItem[];

  constructor(
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
  ) { }


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
    this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  }

  async GoHome() {
    window.location.replace(this.OktaConfigService.strPostLogoutURL);
  }

}

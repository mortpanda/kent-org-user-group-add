import { Injectable } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {PrimeIcons} from 'primeng/api';
import { OktaSDKAuthService } from '../okta/okta-auth.service';
import { OktaConfigService } from '../okta/okta-config.service';
import {ModalComponent} from '../modal/modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataService } from '../data-service/data.service';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  // itemMenubar:MenuItem[];

  constructor(
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
    private ModalComponent:ModalComponent,
    private _matdialog: MatDialog,
    private DataService: DataService,
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

orgActionMenu=[
  {
    label: 'Add User',
    // icon: "assets/img/cabin_white.png",
    icon: "pi pi-user-plus",
    command: () => {
      this.openModal("addUser");
    }
  },
  {
    label: 'Add Group',
    // icon: "assets/img/cabin_white.png",
    icon: "pi pi-plus",
    command: () => {
      this.openModal("addGroup");
    }
  },
]

  async Logout() {
    this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  }

  async GoHome() {
    window.location.replace(this.OktaConfigService.strPostLogoutURL);
  }


  openModal(action){
    this.DataService.changeMessage(action);
    const DialogConfig = new MatDialogConfig();
    DialogConfig.disableClose = false;
    DialogConfig.id = "modal-component";
    DialogConfig.height = "auto";
    DialogConfig.width = "400px";
    const modalDialog = this._matdialog.open(ModalComponent, DialogConfig);
  }


}

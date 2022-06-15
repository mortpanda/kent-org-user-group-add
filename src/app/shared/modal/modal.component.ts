import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { OktaApiService } from '../okta/okta-api.service';
import { OktaGetTokenService } from '../okta/okta-get-token.service';
import { OktaSDKAuthService } from '../okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../okta/okta-config.service";
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  userFirstName;
  userLastName;
  userEmail;

  groupName;
  groupDesc;


  userAddAction: boolean = false;
  groupAddAction: boolean = false;
  selectedMessage: any;
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  strThisUser;
  strFullName;



  constructor(
    private DataService: DataService,
    private OktaApiService: OktaApiService,
    public OktaGetTokenService: OktaGetTokenService,
    public OktaSDKAuthService: OktaSDKAuthService,
    public OktaConfigService: OktaConfigService,
    private messageService: MessageService,
  ) {
    this.userFirstName = "Test";
    this.userLastName = "User-200"
    this.userEmail = "test.user-200@okta.com"

  }

  async ngOnInit() {
    this.DataService.currentMessage.subscribe(message => (this.selectedMessage = message));
    // alert(this.selectedMessage)


    this.strUserSession = await this.authService.isAuthenticated();
    console.log(this.strUserSession)
    switch (this.strUserSession == true) {
      case false:
        window.location.replace(this.OktaConfigService.strPostLogoutURL);
      case true:
        this.strThisUser = await this.authService.token.getUserInfo()
          .then(function (user) {
            return user
          })
          .catch((err) => {
            console.log(err);
            window.location.replace(this.OktaConfigService.strPostLogoutURL);
          })
        this.strFullName = this.strThisUser.name;
        await this.processData(this.selectedMessage);

        break;
    }
    console.log(this.strThisUser)

  }


  async processData(action) {

    switch (action) {
      case "addUser": {
        this.userAddAction = true;
        this.groupAddAction = false;


        break;
      }
      case "addGroup": {
        this.userAddAction = false;
        this.groupAddAction = true;

        break;
      }
    }
  }

  // SubmitResponse;
  async Submit(action) {
    await console.log(this.userFirstName)
    await console.log(this.userLastName)
    await console.log(this.userEmail)

    switch (action) {
      case "adduser": {
        await this.AddObject(action, this.OktaConfigService.strAddUrl, this.userEmail, this.strThisUser.email, this.userFirstName, this.userLastName)
        // await this.AddObject('adduser', this.OktaConfigService.strAddUrl, this.userEmail, this.strThisUser.sub, this.userFirstName, this.userLastName)
        break;
      }

    }
  }


  myObjectToAdd;
  async AddObject(action, url, email, subEmail, firstname, lastname) {
    let requestURI;
    requestURI = url;

    let requestBody;
    requestBody = {
      action: action,
      secondEMail: subEmail,
      email: email,
      firstname: firstname,
      lastname: lastname,
    }
    this.myObjectToAdd = await this.OktaApiService.InvokeFlow(requestURI, requestBody);
    console.log(this.myObjectToAdd);
    await this.processRes(this.myObjectToAdd.status);

  }

  processRes(res) {
    switch (res) {
      case "Secondary email wrong!": {
        this.toastMsg = this.myObjectToAdd.status;
        this.showError();
        break;
      }
      case "User exists": {
        this.toastMsg = this.myObjectToAdd.status;
        this.showError();
        break;
      }

      case "User created": {
        this.toastMsg = this.myObjectToAdd.status;
        this.showSuccess();
        break;
      }
    }
  }

  toastMsg;
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: this.toastMsg });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.toastMsg });
  }
  onReject() {
    this.messageService.clear('c');
  }

}

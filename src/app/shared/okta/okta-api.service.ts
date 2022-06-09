import { Injectable } from '@angular/core';
import { OktaConfigService } from "./okta-config.service";
import { OktaSDKAuthService } from './okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js';


@Injectable({
  providedIn: 'root'
})
export class OktaApiService {
  public authService = new OktaAuth(this.OktaSDKAuthService.config);

  constructor(
    public OktaConfigService: OktaConfigService,
    public OktaSDKAuthService: OktaSDKAuthService,
  ) { }

  async OktaGet(url, token) {
    const thisFetch = fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
      },
    })
      .then(response => response.json())
    let responseJson = await thisFetch;
    return responseJson       
  }


  async InvokeFlow(url,content) {
    const thisFetch = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
      },
      body: JSON.stringify(content),
    })
      .then(response => response.json())
    let responseJson = await thisFetch;
    return responseJson       
  }

}


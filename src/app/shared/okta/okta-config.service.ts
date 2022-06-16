import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OktaConfigService {
  constructor() { }

  //Localhost https://kent-nagao-oie.oktapreview.com
  // strBaseURI = 'https://kent-nagao-oie.oktapreview.com/';
  // strRedirectURL = 'https://192.168.1.100:4200/kent-org-user-group-add/add/';
  // strClientID = '0oa47buceiGBGd8bj0x7';
  // strIssuer = 'https://kent-nagao-oie.oktapreview.com/oauth2/default/';
  // strPostLogoutURL = 'https://192.168.1.100:4200/kent-org-user-group-add/';
  // strScope = ['openid', 'email', 'profile', 'address'];
  // strResponseType = ['token', 'id_token'];
  // strResponseMode = 'fragment';
  // strPrompt = 'login';
  // strPkce = true;
  // strLang = 'en';
  // strBrand = '#abd5d6';
  // strLogo = "assets/img/gunmachan.jpg";
  // strMeEP = '/api/v1/users/me';
  // strAddUrl = 'https://kent-nagao-oie.workflows.oktapreview.com/api/flo/3caa2f66e45159df4070986a2cec55e4/invoke?clientToken=570a455593ea07870f7622bdea0e6b9b6c92387207b3a6cb48ba8ac932c37c16';


  // strGitHubRepo = "https://github.com/mortpanda/my-apps-launcher-v2";

  //Git Pages https://kent-nagao-oie.oktapreview.com
  strBaseURI = 'https://kent-nagao-oie.oktapreview.com/';
  strRedirectURL = 'https://mortpanda.github.io/kent-org-user-group-add/add/';
  strClientID = '0oa47buceiGBGd8bj0x7';
  strIssuer = 'https://kent-nagao-oie.oktapreview.com/oauth2/default/';
  strPostLogoutURL = 'https://mortpanda.github.io//kent-org-user-group-add/';
  strScope = ['openid', 'email', 'profile', 'address'];
  strResponseType = ['token', 'id_token'];
  strResponseMode = 'fragment';
  strPrompt = 'login';
  strPkce = true;
  strLang = 'en';
  strBrand = '#abd5d6';
  strLogo = "assets/img/gunmachan.jpg";
  strMeEP = '/api/v1/users/me';
  strAddUrl = 'https://kent-nagao-oie.workflows.oktapreview.com/api/flo/3caa2f66e45159df4070986a2cec55e4/invoke?clientToken=570a455593ea07870f7622bdea0e6b9b6c92387207b3a6cb48ba8ac932c37c16';


  strGitHubRepo = "https://github.com/mortpanda/my-apps-launcher-v2";


}
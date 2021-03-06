import {Injectable} from '@angular/core';
import {NavController} from "ionic-angular";

/*
  Provider Condif du FRAMEWORK.
*/
@Injectable()
export class ConfigFmkServiceProvider {

  TITLE = "app_title";
  VERSION = "app_version";

  API_LOG_DEBUG: boolean = false;

  PATH_USER = "user";

  API_FACEBOOK_TEST: string = 'API_FACEBOOK_TEST';
  API_FACEBOOK_PROD: string = 'API_FACEBOOK_PROD';

  API_FACEBOOK_TITLE: string = 'API_FACEBOOK_TITLE';
  API_FACEBOOK_URL: string = 'API_FACEBOOK_URL';
  API_FACEBOOK_IMAGE: string = 'API_FACEBOOK_IMAGE';
  API_FACEBOOK_DESCRIPTION: string = 'API_FACEBOOK_DESCRIPTION';

  API_ADMOB_BANNIER: string = 'API_ADMOB_BANNIER';

  API_GOOGLE_ANALYTICS: string = 'API_GOOGLE_ANALYTICS';
  API_GOOGLE_ANALYTICS_DEBUG: boolean = false;

  API_PAYPAL_KEY: string = 'API_PAYPAL_KEY';
  API_PAYPAL_SANDBOX_KEY: string = 'API_PAYPAL_SANDBOX_KEY';
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  API_PAYPAL_MOBILE_ENVIRONMENTS: string = 'PayPalEnvironmentNoNetwork';
  API_PAYPAL_PRICE: string = 'API_PAYPAL_PRICE';
  API_PAYPAL_CURRENCY: string = 'API_PAYPAL_CURRENCY';
  API_PAYPAL_NAME: string = 'API_PAYPAL_NAME';

  API_URL_CORDOVA: string = 'API_URL_CORDOVA';
  API_URL_LOCAL: string = 'API_URL_LOCAL';
  API_URL_PROD: string = 'API_URL_PROD';

  constructor() {
  }

  closePage(navCtrl: NavController) {
    navCtrl.popToRoot();
  }
}

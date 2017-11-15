import {Component} from '@angular/core';
import {IonicPage, NavParams, Platform} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {DataFmkServiceProvider} from "../../app-fmk/providers/data-fmk-service/data-fmk-service";
import {FacebookServiceProvider} from "../../app-fmk/providers/facebook-service/facebook-service";
import {PaypalServiceProvider} from "../../app-fmk/providers/paypal-service/paypal-service";
import {GoogleAnalyticsServiceProvider} from "../../app-fmk/providers/google-analytics-service/google-analytics-service";

/**
 * Modale de paramètre.
 */

@IonicPage({segment: 'params/:paimentId'})
@Component({
  selector: 'page-params',
  templateUrl: 'params.html',
})
export class ParamsPage {

  reset:boolean;
  language:string = "en";

  donate:boolean = false;

  constructor(private platform:Platform, private navParams:NavParams, private translate: TranslateService, private dataService:DataFmkServiceProvider, private facebookService: FacebookServiceProvider,
              protected gAService:GoogleAnalyticsServiceProvider, private paypalService:PaypalServiceProvider) {
    this.facebookService.doNothing();
    if (this.translate.getBrowserLang() !== undefined) {
      this.language = this.translate.getBrowserLang();
    }
    this.gAService.sendPageView("ParamsPage");

    let paimentId = this.navParams.get("paimentId");
    if (paimentId && paimentId > 0) {
      this.paypalService.getPaypalPaimentFromApi(paimentId).subscribe(() => {
        this.donate = true;
      });
    }
  }

  doPaypalPaiementCordova() {
    this.paypalService.getPaypalPaimentFromCordova().subscribe(() => {
      this.donate = true;
    });
  }

  isCordova() {
    return this.platform.is('cordova');
  }

  isLocal() {
    return location.href.indexOf("localhost") != -1;
  }

  doReset() {
    if (this.reset === true) {
      this.dataService.data = { ...this.dataService.dataInit };
      this.dataService.save();
    }

  }
  doChangeLanguage() {
    this.translate.use(this.language);
  }

}
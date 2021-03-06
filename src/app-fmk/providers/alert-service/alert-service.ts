import {Injectable} from '@angular/core';
import {AlertController, ModalController, Popover, PopoverController, ToastController} from "ionic-angular";

/*
*/
@Injectable()
export class AlertServiceProvider {

  popover: Popover;

  constructor(public alertCtrl: AlertController, public modalCtrl: ModalController, public popoverCtrl: PopoverController, private toastCtrl: ToastController) {
  }

  promptAlert(title, message) {
    const alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ['Ok']
    });
    alert.present();
  }

  showConfirm(title: string, message: string, doNext, doClose = null) {
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            if (doClose) {
              doClose();
            }
          }
        },
        {
          text: 'Ok',
          handler: () => {
            doNext();
          }
        }
      ]
    });
    confirm.present();
  }

  presentPopover(page, myEvent) {
    this.popover = this.popoverCtrl.create(page);
    this.popover.present({ ev: myEvent });
  }
  openModale(page, data = {}) {
    let modal = this.modalCtrl.create(page, data);
    modal.present();
  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'bottom',
      showCloseButton: true
    });
    toast.present();
  }
}

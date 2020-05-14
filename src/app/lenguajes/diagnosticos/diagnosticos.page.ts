import { Component, OnInit } from '@angular/core';
import {DenominacionPage} from './denominacion/denominacion.page';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-diagnosticos',
  templateUrl: './diagnosticos.page.html',
  styleUrls: ['./diagnosticos.page.scss'],
})
export class DiagnosticosPage implements OnInit {
rootPAge: any;
  constructor(public navCtrl: NavController) {
    this.rootPAge = DenominacionPage;
  }

  ngOnInit() {
  }

  openPage(page) {
    this.navCtrl.navigateForward(page);
  }

}

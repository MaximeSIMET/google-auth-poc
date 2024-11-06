import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() {}

  googleAuthInitalized = false;

  async initGoogleAuth() {
    await GoogleAuth.initialize({
      clientId: '866240789838-k3ovk5bhmusja7fi17eg63olr6n51omp.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: false,
    })
      .then(() => {
        this.googleAuthInitalized = true;
      })
      .catch(error => {
        alert("Error init google auth" + error);
      });
  }

  async loginGoogle() {
    await GoogleAuth.signIn()
      .then(result => {
        console.log(result);
        alert("Success");
      })
      .catch(error => {
        alert(error);
      })
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ButtonComponent],
})
export class HomePage {
  constructor(private router: Router) {}

  goToCalcul() {
    this.router.navigateByUrl('/calcul');
  }

  goToUsers(): void {
    this.router.navigate(['users']);
  }
}

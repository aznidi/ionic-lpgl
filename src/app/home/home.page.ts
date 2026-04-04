import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent,
} from '@ionic/angular/standalone';
import { ButtonComponent } from '../button/button.component';
import { NavHeaderComponent } from '../nav-header/nav-header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, ButtonComponent, NavHeaderComponent],
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

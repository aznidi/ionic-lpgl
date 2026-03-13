import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { NavHeaderComponent } from '../nav-header/nav-header.component';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.page.html',
  styleUrls: ['./calcul.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonInput,
    IonContent,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    NavHeaderComponent
  ],
})
export class CalculPage implements OnInit {
  nb_one: number = 0;
  nb_two: number = 0;
  result: number = 0;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToHome(): void {
    this.router.navigate(['home']);
  }

  add(): void {
    this.result = this.nb_one + this.nb_two;
  }
  sub(): void {
    this.result = this.nb_one - this.nb_two;
  }
  mul(): void {
    this.result = this.nb_one * this.nb_two;
  }
  div(): void {
    if (this.nb_two === 0) return;
    this.result = this.nb_one / this.nb_two;
  }
}

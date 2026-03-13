import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { NavHeaderComponent } from '../nav-header/nav-header.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavHeaderComponent],
})
export class WeatherPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

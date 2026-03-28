import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { NavHeaderComponent } from '../nav-header/nav-header.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonItem,
    IonList,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    CommonModule,
    FormsModule,
    NavHeaderComponent,
  ],
})
export class WeatherPage implements OnInit {
  country: any;
  temp: any;
  pres: any;
  hum: any;
  weatherData: any;

  constructor(private http: HttpClient) {
    this.getWeatherData();
  }

  ngOnInit() {}

  getWeatherData(): void {
    this.http
      .get(
        'https://api.openweathermap.org/data/2.5/weather?id=524901&appid=938eaa591b0c30b35f31de93d3fd6c68',
      )
      .subscribe(
        (data) => {
          this.weatherData = data;
          console.log(this.weatherData);
          if (this.weatherData['sys']['country'] === 'EH') {
            this.country = 'MA';
          } else {
            this.country = this.weatherData['sys']['country'];
          }
          this.temp = this.weatherData['main']['temp'];
          this.pres = this.weatherData['main']['pressure'];
          this.hum = this.weatherData['main']['humidity'];
        },
        (Error) => {
          console.log(Error);
        },
      );
  }
}

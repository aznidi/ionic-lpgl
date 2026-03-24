import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { IonContent, IonButton } from '@ionic/angular/standalone';
import { NavHeaderComponent } from '../nav-header/nav-header.component';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    NavHeaderComponent,
  ],
})
export class CameraPage implements OnInit {
  capturedImage: string | null = null;
  constructor() {}

  ngOnInit() {}

  async captureImage() {
    this.capturedImage = await this.takePicture();
  }

  async takePicture(): Promise<string | null> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      return image.webPath || null;
    } catch (error) {
      return null;
    }
  }
}

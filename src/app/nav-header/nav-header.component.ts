import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
} from '@ionic/angular/standalone';

type NavItem = { label: string; path: string };

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  @Input() title = 'App';

  // Nav links (routes)
  items: NavItem[] = [
    { label: 'Calcul', path: '/calcul' },
    { label: 'Users', path: '/users' },
    { label: 'Camera', path: '/camera' },
    { label: 'Weather', path: '/weather' },
  ];
}
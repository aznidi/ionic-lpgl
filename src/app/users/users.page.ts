import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { NavHeaderComponent } from '../nav-header/nav-header.component';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavHeaderComponent],
})
export class UsersPage implements OnInit {
  private BASE_URL = 'https://jsonplaceholder.typicode.com/users';

  httpClient = inject(HttpClient);
  public users: Array<User> = [];
  constructor() {}

  ngOnInit() {
    this.httpClient.get(this.BASE_URL).subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (err) => console.log(err),
    });
  }
}

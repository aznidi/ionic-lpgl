import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { NavHeaderComponent } from '../nav-header/nav-header.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, NavHeaderComponent],
})
export class TodosPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  searchTerm: string = '';

  constructor() {}

  onSearchChange(event: any) {
    this.searchTerm = event?.detail?.value ?? '';
  }
}
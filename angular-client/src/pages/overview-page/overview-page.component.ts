import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.css'
})
export class OverviewPageComponent implements OnInit {
  time = new Date();
  location = 'Boston, Massachusetts';
  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
    console.log('Initialized');
  }
}

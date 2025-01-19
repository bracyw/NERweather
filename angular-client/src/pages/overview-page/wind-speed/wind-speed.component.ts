import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wind-speed',
  templateUrl: './wind-speed.component.html',
  styleUrl: './wind-speed.component.css'
})
export class WindSpeedComponent implements OnInit {
  windSpeed = 1;

  ngOnInit(): void {
    setInterval(() => {
      if (this.windSpeed < 100) {
        this.windSpeed += 1;
      } else {
        this.windSpeed = 0;
      }
    }, 5000);
  }
}

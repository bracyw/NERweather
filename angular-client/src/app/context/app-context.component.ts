import { Component, OnInit } from '@angular/core';

/**
 * Container for the entire application, contains the socket service, API serivce, and storage service.
 */
@Component({
  selector: 'app-context',
  templateUrl: './app-context.component.html'
})
export default class AppContextComponent implements OnInit {
  ngOnInit(): void {
    console.log('app context is running');
  }
}

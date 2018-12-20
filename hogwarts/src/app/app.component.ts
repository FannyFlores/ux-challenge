import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navstructure: any;
  navstructure2: any;
  constructor() {}
  ngOnInit(): void {
    this.navstructure = ['Locations', 'Check Rates', 'Gifts', 'Food & Wine', 'About', 'Contact'];
    this.navstructure2 = ['View Availability', 'Gift Certificates', 'General Information', 'Loyalty Program'];
  }
}


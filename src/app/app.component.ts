import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingInAngular';
  constructor(private router: Router) {

  }

  name: string = "kartik"
  routeToDept() {
    this.router.navigate(['departments', this.name])
  }
}

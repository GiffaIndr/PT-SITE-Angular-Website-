import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt-site';
  imageUrl = 'assets/images/';
  images = ['catfront.gif'];
  constructor() { }
  ngOnInit() {

  }
}
 
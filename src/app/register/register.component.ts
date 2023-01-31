import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'pt-site';
  imageUrl = 'assets/images/';
  images = ['catfront.gif'];
  constructor() { }
  ngOnInit() {}
}

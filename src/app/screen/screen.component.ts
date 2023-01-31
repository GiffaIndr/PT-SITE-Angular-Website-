import { Component } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent {

  title = 'Screen';
  ImageUrl = 'assets/images';
  Image = 'catfront.gif';

  constructor() { }
  ngOnInit() {}
}

import { Component } from '@angular/core';
export class Hero {
  name: string;
  id: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Tour of heros';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  otherHeroes = ['Sam', 'Joshua', 'David'];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-menu',
  templateUrl: './intro-menu.component.html',
  styleUrls: ['./intro-menu.component.less']
})
export class IntroMenuComponent implements OnInit {

  ships: any = [
    { Label: 'Scrabble', Position: 5, Route: '/scrabble/scrabble/game' },
    { Label: 'Recipes', Position: 4, Route: '/recipes/recipes' },
    { Label: 'Animatus', Position: 3, Route: '/animatus/animatus' },
    { Label: 'Racing', Position: 2, Route: '/racing/racing' },
    { Label: 'About', Position: 1, Route: '/about/about' }
  ];

  constructor() { }

  ngOnInit() { }
}

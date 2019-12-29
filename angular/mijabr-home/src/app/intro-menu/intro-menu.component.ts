import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-menu',
  templateUrl: './intro-menu.component.html',
  styleUrls: ['./intro-menu.component.less']
})
export class IntroMenuComponent implements OnInit {

  ships: any = [
    { Label: 'Scrabble', Position: 5, Route: '/scrabble/game' },
    { Label: 'Recipes', Position: 4, Route: '/recipes' },
    { Label: 'Animatus', Position: 3, Route: '/animatus' },
    { Label: 'Racing', Position: 2, Route: '/racing' },
    { Label: 'About', Position: 1, Route: '/about' }
  ];

  constructor() { }

  ngOnInit() { }
}

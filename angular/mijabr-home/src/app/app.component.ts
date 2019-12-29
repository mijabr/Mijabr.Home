import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'MIJABR';
  isMenuOpen = true;
  closeOnSelect = false;

  onClickBurgerMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClickMiniMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.closeOnSelect = this.isMenuOpen;
  }

  onMenuItemSelected() {
    if (this.closeOnSelect) {
      this.closeOnSelect = false;
      this.isMenuOpen = false;
    }
  }
}

import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme-service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isDarkMode = false;

  constructor(public themeService: ThemeService) {
    // Get the initial theme state
    this.themeService.isDarkMode$.subscribe(state => {
      this.isDarkMode = state;
    });
  }

  ngOnInit() {

    // Every time we come here we need to check from localstorage if user have solved the riddle
    // If yes we will redirect to home else to riddle page  
  }
}

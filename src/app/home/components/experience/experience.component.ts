import { Component } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme-service/theme.service';

@Component({
  selector: 'home-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  isDarkMode = false;
  constructor(public themeService: ThemeService) {
    // Get the initial theme state
    this.themeService.isDarkMode$.subscribe(state => {
      this.isDarkMode = state;
    });
  }
}

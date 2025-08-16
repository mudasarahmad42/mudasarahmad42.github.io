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

  OpenGroupIDVideo() {
    const videoUrl = 'https://www.imanami.com/wp-content/uploads/2023/11/Netwrix-GroupID.mp4';
    window.open(videoUrl, '_blank');
  }

  OpenNetwrixHelp(){
    const helpUrl = 'https://helpcenter.netwrix.com/';
    window.open(helpUrl, '_blank');
  }
}

import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/services/theme-service/theme.service';

@Component({
  selector: 'home-currently-learning',
  templateUrl: './currently-learning.component.html',
  styleUrls: ['./currently-learning.component.css']
})
export class CurrentlyLearningComponent implements OnInit {

  isDarkMode = false;
  constructor(public themeService: ThemeService) {
    // Get the initial theme state
    this.themeService.isDarkMode$.subscribe(state => {
      this.isDarkMode = state;
    });
  }

  ngOnInit(): void {
  }

}

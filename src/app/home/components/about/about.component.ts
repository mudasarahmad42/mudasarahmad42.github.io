import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/services/theme-service/theme.service';

@Component({
  selector: 'home-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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

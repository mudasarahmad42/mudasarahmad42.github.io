import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/services/theme-service/theme.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class TechnologiesComponent implements OnInit {

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

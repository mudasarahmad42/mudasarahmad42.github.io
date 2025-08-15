import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/services/theme-service/theme.service';

@Component({
  selector: 'home-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

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

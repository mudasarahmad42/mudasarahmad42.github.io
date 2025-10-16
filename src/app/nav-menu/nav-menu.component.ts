import { Component } from '@angular/core';
import { ThemeService } from '../core/services/theme-service/theme.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  standalone: true,
  styleUrls: ['./nav-menu.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule
  ]
})
export class NavMenuComponent {
  isExpanded = false;
  isDarkMode = false;
  blogsButtonText = "Blogs";

  constructor(public themeService: ThemeService) {
    // Get the initial theme state
    this.themeService.isDarkMode$.subscribe(state => {
      this.isDarkMode = state;
    });
  }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  changeText(innerText: string) {
    this.blogsButtonText = innerText;

    setTimeout(() => {
      this.blogsButtonText = "Blogs"
    }, 2500)
  }
}

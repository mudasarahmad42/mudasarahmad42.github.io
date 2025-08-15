import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkMode$: Observable<boolean> = this.isDarkModeSubject.asObservable();

  constructor() {
    let isDarkTheme = localStorage.getItem("mud-theme-isdark");

    if (isDarkTheme) {
      let isDark = (/true/i).test(isDarkTheme);

      if (location.pathname == '/welcome') {
        isDark = false;
      }

      this.isDarkModeSubject.next(isDark);
      this.setHTMLBackgroundColor(isDark);
    }
  }


  toggleTheme() {
    const currentThemeIsDark = this.isDarkModeSubject.getValue();

    this.setHTMLBackgroundColor(!currentThemeIsDark);
    localStorage.setItem("mud-theme-isdark", !currentThemeIsDark + "");
    this.isDarkModeSubject.next(!currentThemeIsDark);
  }

  private setHTMLBackgroundColor(isDark: boolean) {
    document.getElementsByTagName("html")[0].style.backgroundColor = isDark ? "#121212" : "#fff";
  }
}

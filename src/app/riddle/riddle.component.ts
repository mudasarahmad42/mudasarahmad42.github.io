import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../core/services/theme-service/theme.service';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.css']
})
export class RiddleComponent implements OnInit {
  riddle: boolean = false;
  lanternClickedCounter = 0;

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    const shadow = document.querySelector('.shadow') as HTMLElement;

    setTimeout(() => {
      const shadow = document.querySelector('.shadow') as HTMLElement;
      shadow.style.backgroundImage = "radial-gradient(circle at center, transparent, rgba(0,0,0,0.98) 25%)"
    }, 6000)

    if (shadow) {
      document.addEventListener('mousemove', (e) => {
        let clientWidth = document.documentElement.clientWidth;
        let clientHeight = document.documentElement.clientHeight;

        // Horizontal
        let MAX_RIGHT_X = ((clientWidth / 2) + 110);
        let MAX_LEFT_X = (((clientWidth / 2) + clientWidth) - 120);

        // Vertical
        let MAX_TOP_Y = ((clientHeight * 1.2) + 100);
        let MAX_BOTTOM_Y = (clientHeight * 0.65);

        let x = e.clientX - (document.documentElement.clientWidth * 1.5);
        let y = e.clientY - (document.documentElement.clientHeight * 1.5);

        if (Math.abs(y) > MAX_TOP_Y) {
          y = -MAX_TOP_Y
        }

        if (Math.abs(y) < MAX_BOTTOM_Y) {
          y = -MAX_BOTTOM_Y
        }


        if (Math.abs(x) > MAX_LEFT_X) {
          x = -MAX_LEFT_X;
        }

        if (Math.abs(x) < MAX_RIGHT_X) {
          x = -MAX_RIGHT_X;
        }

        shadow.style.backgroundPositionX = `${x}px`;
        shadow.style.backgroundPositionY = `${y}px`;
       
      })
    }
  }

  showRiddle() {
    this.riddle = true;
    this.lanternClickedCounter++;

    const shadow = document.querySelector('.shadow') as HTMLElement;
    shadow.style.backgroundImage = "radial-gradient(circle at center, transparent, rgba(0,0,0,0.98) 15%)"

    if (this.lanternClickedCounter > 5) {
      this.lanternClickedCounter = 0;
      alert('Find a riddle on this page')
    }
  }

}

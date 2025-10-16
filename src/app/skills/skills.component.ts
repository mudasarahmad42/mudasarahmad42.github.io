import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NavMenuComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: { name: string; description: string; icon: SafeHtml }[];
  selectedSkill: any = null;

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router) {
    this.skills = [
      {
        name: 'Angular',
        description: 'Interactive examples of Angular components',
        icon: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <path d="M227.08,64.62l-96-40a7.93,7.93,0,0,0-6.16,0l-96,40a8,8,0,0,0-4.85,8.44l16,120a8,8,0,0,0,4.35,6.1l80,40a8,8,0,0,0,7.16,0l80-40a8,8,0,0,0,4.35-6.1l16-120A8,8,0,0,0,227.08,64.62ZM200.63,186.74,128,223.06,55.37,186.74,40.74,77,128,40.67,215.26,77ZM121,84.12l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76l-40-72a8,8,0,0,0-14,0ZM141.07,128H114.93L128,104.47Z"></path>
          </svg>
        `)
      }
    ];
  }


  openModal(skill: any) {
    this.selectedSkill = skill;
  }

  closeModal() {
    this.selectedSkill = null;
  }

  navigateToReactiveForms() {
    this.router.navigate(['angular/reactive-forms'], { relativeTo: this.route });
  }
}

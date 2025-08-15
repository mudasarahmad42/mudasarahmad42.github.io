import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { RiddleComponent } from './riddle/riddle.component';
import { IconsModule } from './icons/icons.module';
import { AboutComponent } from './home/components/about/about.component';
import { TechnologiesComponent } from './home/components/technologies/technologies.component';
import { ProjectsComponent } from './home/components/projects/projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { ExperienceComponent } from './home/components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RiddleComponent,
    AboutComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    IconsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'welcome', component: RiddleComponent },
    ]),
    NgbModule
  ],
  providers: [
    { provide: 'environment', useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

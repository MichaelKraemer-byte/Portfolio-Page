import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CursorEffektComponent } from './components/cursor-effekt/cursor-effekt.component';
import { CommonModule } from '@angular/common';
import { GreyBackgroundComponent } from './components/greybackground/greybackground.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactFormComponent,
    CursorEffektComponent,
    GreyBackgroundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showGreyBackground: boolean = false;


  toggleGreyBackground(){
    if (this.showGreyBackground) {
      setTimeout(()=>{
        this.showGreyBackground = false;
      }, 2000);
    } else{
      this.showGreyBackground = true;
    }
  }

  // fadeOut(){
  //   const greyBackground = document.querySelector('.grey-background') as HTMLElement;
  //   greyBackground.style.animation = 'fade-out 1s ease-in-out';
  // }
}

import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ModalComponent } from './modal/modal.component';


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
    ModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild(ModalComponent) modal!: ModalComponent;

  openModal() {
    this.modal.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }


}
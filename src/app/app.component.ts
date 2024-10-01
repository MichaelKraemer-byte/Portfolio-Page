import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AtfComponent } from './components/atf/atf.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CursorEffektComponent } from './components/cursor-effekt/cursor-effekt.component';
import { ModalComponent } from './components/modal/modal.component';
import { Project } from './models/project.interface';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AtfComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    CursorEffektComponent,
    ModalComponent,
    TestimonialsComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild(ModalComponent) modal!: ModalComponent;  
  @ViewChild(ProjectsComponent) projectsComponent!: ProjectsComponent;


  project: Project | null = null;
  projects: Project[] = [];
  
  openingProject(project: Project){
    this.project = project;  
    this.modal.isModalOpen = true;
    this.modal.animateNextProject = true;
    document.body.style.overflow = 'hidden';
    this.projects = this.projectsComponent.projects;
  }

}
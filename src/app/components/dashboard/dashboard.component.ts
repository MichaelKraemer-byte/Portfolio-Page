import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtfComponent } from './atf/atf.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
import { Project } from '../../models/project.interface';
import { HeaderModalComponent } from '../../shared/header-modal/header-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AtfComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent,
    TestimonialsComponent,
    ModalComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {

  @ViewChildren('section', { read: ElementRef }) sections!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const options = {
      threshold: 0.5
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          element.classList.add('visible');
        }
        // } else {
        //   element.classList.remove('visible');
        // }
      });
    }, options);
    this.sections.forEach(section => {
      observer.observe(section.nativeElement);
    });
  }

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


import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Project } from '../../models/project.interface';
import { ModalComponent } from '../../modal/modal.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor() {}

  project1IsVisible: boolean = false;
  project2IsVisible: boolean = false;
  project3IsVisible: boolean = false;

  // @Output() openModalEvent = new EventEmitter<void>();

  toggleVisibilityProject(index: number, isHovered: boolean){
    if (index == 0) {
      this.project1IsVisible = isHovered;
    } else if(index == 1) {
      this.project2IsVisible = isHovered;
    } else if(index == 2) {
      this.project3IsVisible = isHovered;
    }
  }

  isModalOpen = false;  // Kontrolliert, ob das Modal geöffnet ist
  currentProject: Project | null = null;


  projects: Project[] = [
  {
    number: 1,
    title: 'Project 1',
    description: 'Description of project 1',
    technologies: ['Angular', 'TypeScript', 'SCSS'],
    links: 'https://project1.com',
    img: 'path/to/image1.jpg',
  },
  {
    number: 2,
    title: 'Project 2',
    description: 'Description of project 2',
    technologies: ['React', 'JavaScript', 'CSS'],
    links: 'https://project2.com',
    img: 'path/to/image2.jpg',
  }
];

  openModal(project: any) {
    this.currentProject = project;
    // this.openModalEvent.emit(); 
    this.isModalOpen = true;  // Modal öffnen
  }

  closeModal() {
    this.isModalOpen = false;  // Modal schließen
  }

  nextProject() {
    const currentIndex = this.projects.findIndex(p => p === this.currentProject);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.currentProject = this.projects[nextIndex];
  }
}
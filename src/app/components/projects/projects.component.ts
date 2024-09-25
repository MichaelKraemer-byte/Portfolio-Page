import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, PopupComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor() {}

  getSanitizedHTML() {
  }

  project1IsVisible: boolean = false;
  project2IsVisible: boolean = false;
  project3IsVisible: boolean = false;

  @Output() openGreyBackgroundEvent = new EventEmitter<void>();

  emitGreyBackground() {
    this.openGreyBackgroundEvent.emit(); 
  }

  toggleVisibilityProject(index: number, isHovered: boolean){
    if (index == 0) {
      this.project1IsVisible = isHovered;
    } else if(index == 1) {
      this.project2IsVisible = isHovered;
    } else if(index == 2) {
      this.project3IsVisible = isHovered;
    }
  }




  selectedProject: any; // Zum Speichern des ausgewählten Projekts
  showPopup = false; // Steuerung der Sichtbarkeit des Popups

  projects = [
    {
      title: 'Join', 
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['<p>Javascript <span class="seperator">|</span> HTML <span>|</span> CSS <span>|</span> Firebase</p>']
    },
    {
      title: 'Loctar Risen', 
      description: 'Jump, run and throw game based on object-oriented approach. Help Scarr to find coins and axes - to fight against the strong troll and to find the treasure of gold.',
      technologies: ['<p>Javascript <span>|</span> HTML <span>|</span> CSS</p>'],
    },
    {
      title: 'DA Bubble', 
      description: 'Ein innovatives Tool.',
      technologies: ['<p>Angular <span>|</span> Typescript <span>|</span> Firebase</p>'],
    }
  ];

  openPopup(project: any) {
    this.selectedProject  = project;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
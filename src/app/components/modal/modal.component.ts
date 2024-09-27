import { Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations:  [
    // Trigger for the entire modal fade in/out
    trigger('fadeAnimation', [
      state('open', style({
        opacity: 1,
        zIndex: 3,
        display: 'block',
      })),
      state('closed', style({
        opacity: 0,
        zIndex: -2,
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.125s ease-in-out', style({ opacity: 0 })),
        style({ display: 'none' })
      ]),
      transition('closed => open', [
        style({ display: 'block' }),  
        animate('0.125s ease-in-out', style({ opacity: 1 }))
      ])
    ]),
    // Trigger for the project content fade in/out
    trigger('fadeProject', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.100s ease-in-out', style({ opacity: 0 }))
      ]),
      transition('closed => open', [
        animate('0.100s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ModalComponent {

  @Input() project: Project | null = null;
  @Input() projects: Project[] = [];
  
  isModalOpen: boolean = false; 
  animateNextProject: boolean = false; 

  close() {
    document.body.style.overflow = ''; 
    this.isModalOpen = false;  
  }

  nextProject() {
    if (this.project) {
    this.animateNextProject = false;

    setTimeout(() => {
      const nextIndex = this.project!.number % this.projects.length;
      this.project = this.projects[nextIndex];
      this.animateNextProject = true;
    }, 100)
    }
  }

}
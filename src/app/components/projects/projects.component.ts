import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  project1IsVisible: boolean = false;
  project2IsVisible: boolean = false;
  project3IsVisible: boolean = false;

  @Output() toggleGreyBackgroundEvent = new EventEmitter<void>;

  emitGreyBackground(){
    this.toggleGreyBackgroundEvent.emit();
  }

  toggleVisibilityProject1(isHovered: boolean){
    this.project1IsVisible = isHovered;
  }

  toggleVisibilityProject2(isHovered: boolean){
    this.project2IsVisible = isHovered;
  }

  toggleVisibilityProject3(isHovered: boolean){
    this.project3IsVisible = isHovered;
  }
}
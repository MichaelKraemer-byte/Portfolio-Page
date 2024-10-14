import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { Project } from '../../../models/project.interface';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor() {}

  project1IsVisible: boolean = false;
  project2IsVisible: boolean = false;
  project3IsVisible: boolean = false;


  toggleVisibilityProject(index: number, isHovered: boolean){
    if (index == 0) {
      this.project1IsVisible = isHovered;
    } else if(index == 1) {
      this.project2IsVisible = isHovered;
    } else if(index == 2) {
      this.project3IsVisible = isHovered;
    }
  }

  @Output() openProjectEvent = new EventEmitter<Project>();

  projects: Project[] = [
    {
      id: 'join',
      number: 1,
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      technologies: ['CSS', 'HTML', 'Firebase', 'JavaScript'],
      github: 'https://github.com/MichaelKraemer-byte/Join',
      livetest: 'https://kraemer-michael.net/join/index.html',
      img: '../../assets/img/join-1.jpg',
    },
    {
      id: 'loctarRisen',
      number: 2,
      title: 'Loctar Risen',
      description: 'A object-oriented jump, run and throw game. Guide Scarr the orc through obstacles, collect coins and axes, and defeat the troll to uncover treasure for his family.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/MichaelKraemer-byte/Loctar-Risen',
      livetest: 'https://kraemer-michael.net/game/index.html',
      img: '../../assets/img/loctar-risen-1.jpg',
    },
    // {
    //   id: 'daBubble',
    //   number: 3,
    //   title: 'DABubble',
    //   description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    //   technologies: ['JavaScript', 'HTML', 'CSS'],
    //   github: 'https://github.com/MichaelKraemer-byte/Join',
    //   livetest: 'https://github.com/MichaelKraemer-byte/Loctar-Risen',
    //   img: '../../assets/img/dabubble.jpg',
    // },
  ];

  openProject(project: any) {
    this.openProjectEvent.emit(project);
  }

}
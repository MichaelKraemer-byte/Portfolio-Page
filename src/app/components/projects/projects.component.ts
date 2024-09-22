import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isHiddenProjectVisible1 = false;
  isHiddenProjectVisible2 = false;
  isHiddenProjectVisible3 = false;

//ng style visible anstatt ngif 
  showHiddenProject1() {
    this.isHiddenProjectVisible1 = true;
  }

  showHiddenProject2() {
    this.isHiddenProjectVisible2 = true;
  }

  showHiddenProject3() {
    this.isHiddenProjectVisible3 = true;
  }

  hideHiddenProject1() {
    this.isHiddenProjectVisible1 = false;
  }

  hideHiddenProject2() {
    this.isHiddenProjectVisible2 = false;
  }

  hideHiddenProject3() {
    this.isHiddenProjectVisible3 = false;
  }
}

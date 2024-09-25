import { Component} from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greybackground',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greybackground.component.html',
  styleUrls: ['./greybackground.component.scss'],
  animations: [
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
        animate('0.125s ease-in-out', style({ opacity: 0})),
        style({ display: 'none'})
      ]),
      transition('closed => open', [
        style({ display: 'block' }),  
        animate('0.125s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class GreyBackgroundComponent {


  isVisible: boolean = false; 

  hide() {
    document.body.style.overflow = ''; 
    this.isVisible = false;
  }
}
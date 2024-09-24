import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greybackground',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greybackground.component.html',
  styleUrls: ['./greybackground.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0, zIndex: -2 }), 
        animate('500ms ease-in', style({ opacity: 1, zIndex: 3 })) 
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0, zIndex: -2 })) 
      ])
    ])
  ]
})
export class GreyBackgroundComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    // document.body.style.overflow = 'hidden'; // Disable scrolling
  }

  ngOnDestroy(): void {
    // document.body.style.overflow = ''; // Enable scrolling
  }
}
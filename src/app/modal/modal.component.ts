import { Component, EventEmitter, Output} from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
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
export class ModalComponent {

  isModalOpen: boolean = false;

  @Output() closed = new EventEmitter<void>();

  close() {
    document.body.style.overflow = ''; 
    this.closed.emit(); 
    this.isModalOpen = false;  
  }
}
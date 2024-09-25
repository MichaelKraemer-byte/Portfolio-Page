import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {


  @Input() project: any; // Die Projektinformation
  @Input() isOpen: boolean = false; // Steuerung der Sichtbarkeit

  closePopup() {
    this.isOpen = false; // Popup schließen
  }

}

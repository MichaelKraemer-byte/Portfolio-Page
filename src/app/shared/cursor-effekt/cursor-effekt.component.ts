import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursor-effekt',
  templateUrl: './cursor-effekt.component.html',
  styleUrls: ['./cursor-effekt.component.scss'],
  standalone: true,
  imports: [],
})
export class CursorEffektComponent implements OnInit {

  private blobElement: HTMLElement | null = null;

  ngOnInit(): void {
    // Stelle sicher, dass das Blob-Element nach der Initialisierung erstellt wird
    this.blobElement = document.getElementById('blob');

    if (this.blobElement) {
      // Füge den Event-Listener für den Pointer-Move hinzu
      window.addEventListener('pointermove', this.onPointerMove.bind(this));
    }
  }

  private onPointerMove(event: PointerEvent): void {
    const { clientX, clientY } = event;

    if (this.blobElement) {
      this.blobElement.animate([
        { left: `${clientX}px`, top: `${clientY}px` }
      ], {
        duration: 3000,
        fill: 'forwards'
      });
    }
  }
}
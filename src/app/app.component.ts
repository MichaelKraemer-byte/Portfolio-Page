import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CursorEffektComponent } from './shared/cursor-effekt/cursor-effekt.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModalComponent } from './shared/header-modal/header-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    FooterComponent,
    CursorEffektComponent,
    TranslateModule,
    HeaderModalComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor( viewport: ViewportScroller ) { 
    viewport.setOffset([0, 116])
  }

  modalIsOpen: boolean = false;

  openHeaderModal(){
    document.body.style.overflow = 'hidden'; 
    this.modalIsOpen = true;
  }

  closeHeaderModal(){
    this.modalIsOpen = false;
  }
}
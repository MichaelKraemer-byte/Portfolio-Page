import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-modal',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './header-modal.component.html',
  styleUrl: './header-modal.component.scss',
  animations:  [
    // Trigger for the entire modal fade in/out
    trigger('fadeAnimation', [
      state('open', style({
        opacity: 1,
        zIndex: 15,
        display: 'flex',
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
        style({ display: 'flex' }),  
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
export class HeaderModalComponent {
  currentLanguage: string = 'en';

  @Input('openModal') modalIsOpen: boolean = false;
  @Output() closeHeaderModalEvent = new EventEmitter<void>();

  constructor(public translate: TranslateService, private portfolioService: PortfolioService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    const savedLanguage = localStorage.getItem('language');
    const browserLang = this.translate.getBrowserLang() || 'en';
    this.currentLanguage = savedLanguage ? savedLanguage : (browserLang.match(/en|de/) ? browserLang : 'en');
    this.translate.use(this.currentLanguage);
    this.portfolioService.changeLanguage(this.currentLanguage);
  }

  closeModal(){
    document.body.style.overflow = ''; 
    this.modalIsOpen = false;
    this.closeHeaderModalEvent.emit();
  }

  mobileSwitchLanguage() {
    const toggle = document.getElementById('mobile-language-toggle') as HTMLInputElement;
    const isChecked = toggle.checked; 
    this.currentLanguage = isChecked ? 'de' : 'en'; 
    localStorage.setItem('language', this.currentLanguage); 
    this.portfolioService.changeLanguage(this.currentLanguage); 
    this.translate.use(this.currentLanguage); 
  }
}
